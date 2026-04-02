# rbp_platform_shell/services/routing_service.py
from rbp_platform_shell.routing.policy import ROUTING_POLICY
from rbp_platform_shell.routing.route_map import ROUTE_POLICY_MAP
from rbp_platform_shell.routing.types import RouteEvaluationResult, RoutePolicy, UserRole, AccountState
from rbp_platform_shell.services.entitlement_service import entitlement_service
from rbp_platform_shell.services.registry_service import registry_service
from urllib.parse import urlparse

class RoutingService:
    """
    This service evaluates incoming route requests against defined backend policies
    to enforce access control.
    It implements the logic defined in backend/models/surface_routing_rules.md.
    """

    def __init__(self):
        self._policy_map = ROUTE_POLICY_MAP
        self._policies = ROUTING_POLICY

    def _get_policy_for_route(self, path: str) -> RoutePolicy | None:
        """
        Determines the most specific policy for a given path.
        """
        # Normalize path to ensure consistent matching
        normalized_path = '/' + path.lstrip('/')

        # Find the longest matching prefix
        matched_prefix = None
        for prefix in sorted(self._policy_map.keys(), key=len, reverse=True):
            if normalized_path.startswith(prefix):
                matched_prefix = prefix
                break
        
        if matched_prefix:
            policy_key = self._policy_map[matched_prefix]
            return self._policies.get(policy_key)
        return None

    def evaluate_route_access(
        self,
        path: str,
        is_authenticated: bool,
        user_role: UserRole | None = None,
        account_state: AccountState = "pending_activation",
        user_plan_id: str | None = None,
        user_entitlements: list[str] | None = None,
    ) -> RouteEvaluationResult:
        """
        Evaluates access for a given route based on user context.
        """
        policy = self._get_policy_for_route(path)

        if not policy:
            # Default to blocked if no policy is found
            return RouteEvaluationResult(
                is_allowed=False,
                redirect_target="/",
                reason="NO_DEFINED_POLICY",
            )

        # 1. Anonymous Access Check
        if not is_authenticated and not policy["allow_anonymous"]:
            return RouteEvaluationResult(
                is_allowed=False,
                redirect_target=policy["redirect_if_blocked"],
                reason="AUTHENTICATION_REQUIRED",
            )
        
        # 2. Role Check (if authenticated)
        if is_authenticated and user_role not in policy["allowed_roles"]:
            # Special handling for authenticated users trying to access login/register
            if path in ["/login", "/register"] and "public" in self._policies:
                public_policy = self._policies["public"]
                return RouteEvaluationResult(
                    is_allowed=False,
                    redirect_target="/app/dashboard", # Redirect to default dashboard
                    reason="ALREADY_AUTHENTICATED",
                )
            return RouteEvaluationResult(
                is_allowed=False,
                redirect_target=policy["redirect_if_blocked"],
                reason="UNAUTHORIZED_ROLE",
            )

        # 3. Account State Check
        if account_state not in policy["required_account_states"]:
            # Define specific redirects for critical states
            if account_state == "billing_hold":
                return RouteEvaluationResult(
                    is_allowed=False,
                    redirect_target="/portal/billing",
                    reason="ACCOUNT_BILLING_HOLD",
                )
            if account_state == "suspended":
                return RouteEvaluationResult(
                    is_allowed=False,
                    redirect_target="/suspended-account", # A generic page for suspended users
                    reason="ACCOUNT_SUSPENDED",
                )
            return RouteEvaluationResult(
                is_allowed=False,
                redirect_target=policy["redirect_if_blocked"],
                reason="INVALID_ACCOUNT_STATE",
            )

        # 4. Entitlement Check (if required by policy and applicable)
        if policy["entitlement_required"]:
            # For simplicity, we assume if entitlement is required, it's for a module route
            # This would integrate with the actual entitlement service more deeply.
            module_key = path.split("/")[-1] # Simple extraction for example
            if module_key:
                entitlement_check = entitlement_service.check_module_access(
                    module_key=module_key,
                    plan_id=user_plan_id if user_plan_id else "", # Provide a default/empty plan_id
                    account_state=account_state,
                    user_role=user_role if user_role else "guest",
                    # In a real scenario, actual overrides would be fetched for the user
                    overrides=None
                )
                if not entitlement_check["is_allowed"]:
                    return RouteEvaluationResult(
                        is_allowed=False,
                        # If a specific module is blocked, redirect to app dashboard
                        redirect_target="/app/dashboard", 
                        reason=entitlement_check["reason_code"],
                    )

        # All checks passed
        return RouteEvaluationResult(
            is_allowed=True,
            redirect_target=None,
            reason="ACCESS_GRANTED",
        )

# Singleton instance for easy access
routing_service = RoutingService()
