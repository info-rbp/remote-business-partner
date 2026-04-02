# rbp_platform_shell/services/entitlement_service.py
from rbp_platform_shell.entitlements.types import (
    EntitlementResult,
    Entitlement,
    AccountState,
    UserRole,
    SubscriptionPlan,
    EntitlementOverride,
)
from rbp_platform_shell.entitlements.plans import (
    SUBSCRIPTION_PLANS,
    MODULE_ENTITLEMENT_MAP,
)
from typing import List, Set

class EntitlementService:
    """
    This service evaluates a user's access rights based on their plan,
    account state, and any active overrides.
    It implements the logic defined in backend/models/entitlement_engine.md.
    """

    def _get_effective_entitlements(
        self,
        plan_id: str,
        overrides: List[EntitlementOverride] | None = None
    ) -> Set[Entitlement]:
        """
        Calculates the final set of entitlements for a user by combining
        their plan's base entitlements with any overrides.
        """
        plan = SUBSCRIPTION_PLANS.get(plan_id)
        if not plan:
            return set()

        base_entitlements = set(plan["entitlement_set"])

        if overrides:
            for override in overrides:
                if override["action"] == "grant":
                    base_entitlements.add(override["entitlement"])
                elif override["action"] == "revoke":
                    base_entitlements.discard(override["entitlement"])

        return base_entitlements

    def check_module_access(
        self,
        module_key: str,
        plan_id: str,
        account_state: AccountState,
        user_role: UserRole,
        overrides: List[EntitlementOverride] | None = None
    ) -> EntitlementResult:
        """
        Checks if a user has access to a specific module.
        """
        # First, check for blocking states that override everything else.
        if account_state == "suspended":
            return EntitlementResult(
                is_allowed=False,
                reason_code="ACCOUNT_SUSPENDED",
                matched_entitlements=[],
                remediation_hint="Your account is suspended. Please contact support.",
            )

        if account_state == "billing_hold":
            return EntitlementResult(
                is_allowed=False,
                reason_code="BILLING_HOLD",
                matched_entitlements=[],
                remediation_hint="There is a billing issue with your account.",
            )
        
        # Admins have access to all modules
        if user_role == "admin":
             return EntitlementResult(
                is_allowed=True,
                reason_code="ADMIN_ACCESS",
                matched_entitlements=["all"],
                remediation_hint=None,
            )

        # Determine the required entitlement for the module
        required_entitlement = MODULE_ENTITLEMENT_MAP.get(module_key)
        if not required_entitlement:
            return EntitlementResult(
                is_allowed=False,
                reason_code="MODULE_NOT_MAPPED",
                matched_entitlements=[],
                remediation_hint=f"Module '{module_key}' has no defined entitlement requirement.",
            )

        # Calculate the user's effective entitlements
        effective_entitlements = self._get_effective_entitlements(plan_id, overrides)

        # Check if the required entitlement is in the effective set
        if required_entitlement in effective_entitlements:
            return EntitlementResult(
                is_allowed=True,
                reason_code="ENTITLEMENT_GRANTED",
                matched_entitlements=[required_entitlement],
                remediation_hint=None,
            )
        else:
            return EntitlementResult(
                is_allowed=False,
                reason_code="MISSING_ENTITLEMENT",
                matched_entitlements=[],
                remediation_hint="Your current plan does not include access to this module. Consider upgrading.",
            )

# Singleton instance for easy access
entitlement_service = EntitlementService()
