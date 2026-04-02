# rbp_platform_shell/routing/policy.py
from .types import RoutePolicy, UserRole

# This artifact defines the routing access policies for different application surfaces.
# It is the single source of truth for backend-enforced routing rules.

ROUTING_POLICY: dict[str, RoutePolicy] = {
    "public": {
        "allowed_roles": {"guest", "user", "admin"}, # Everyone can access
        "required_account_states": {
            "pending_activation", "onboarding", "active", "billing_hold", "compliance_hold", "suspended"
        },
        "entitlement_required": False,
        "redirect_if_blocked": "/",
        "allow_anonymous": True,
    },
    "portal": {
        "allowed_roles": {"user", "admin"}, # Must be an authenticated user
        "required_account_states": {
            "active", "billing_hold", "compliance_hold"
        },
        "entitlement_required": False,
        "redirect_if_blocked": "/login",
        "allow_anonymous": False,
    },
    "admin": {
        "allowed_roles": {"admin"}, # Only admins
        "required_account_states": {"active"}, # Must have an active admin account
        "entitlement_required": False,
        "redirect_if_blocked": "/",
        "allow_anonymous": False,
    },
    "app": {
        "allowed_roles": {"user", "admin"}, # Authenticated users and admins
        "required_account_states": {"active"}, # Must be fully active to use the app
        "entitlement_required": True, # Access to specific app modules is entitlement-checked
        "redirect_if_blocked": "/portal",
        "allow_anonymous": False,
    },
}
