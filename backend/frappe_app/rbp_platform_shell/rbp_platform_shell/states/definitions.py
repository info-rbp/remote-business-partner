# rbp_platform_shell/states/definitions.py
from .types import AccountState, StateMetadata

# This artifact is the single source of truth for account state definitions.
# It provides machine-readable metadata that can be used by other services.

ACCOUNT_STATES: dict[AccountState, StateMetadata] = {
    "pending_activation": {
        "state": "pending_activation",
        "description": "User has registered but not yet verified their email.",
        "allowed_actions": ["verify_email"],
        "blocked_actions": ["login", "api_access", "module_launch"],
        "remediation_route": "/check-email",
        "launches_allowed": False,
    },
    "onboarding": {
        "state": "onboarding",
        "description": "User has verified email but not completed setup.",
        "allowed_actions": ["login", "complete_onboarding_steps"],
        "blocked_actions": ["module_launch", "general_api_access"],
        "remediation_route": "/onboarding",
        "launches_allowed": False,
    },
    "active": {
        "state": "active",
        "description": "Account is fully operational and in good standing.",
        "allowed_actions": ["login", "api_access", "module_launch"],
        "blocked_actions": [],
        "remediation_route": None,
        "launches_allowed": True,
    },
    "billing_hold": {
        "state": "billing_hold",
        "description": "Account is restricted due to a billing failure.",
        "allowed_actions": ["login", "access_billing_portal"],
        "blocked_actions": ["module_launch", "general_api_access"],
        "remediation_route": "/portal/billing",
        "launches_allowed": False,
    },
    "compliance_hold": {
        "state": "compliance_hold",
        "description": "Account is restricted pending compliance review.",
        "allowed_actions": ["login", "access_compliance_portal"],
        "blocked_actions": ["module_launch", "general_api_access"],
        "remediation_route": "/portal/compliance",
        "launches_allowed": False,
    },
    "suspended": {
        "state": "suspended",
        "description": "Account has been manually suspended by an administrator.",
        "allowed_actions": [],
        "blocked_actions": ["login", "api_access", "module_launch"],
        "remediation_route": "/support/contact",
        "launches_allowed": False,
    },
}

# Define the valid transitions between states.
# This makes the state machine logic explicit and enforceable.
VALID_TRANSITIONS: dict[AccountState, Set[AccountState]] = {
    "pending_activation": {"onboarding", "suspended"},
    "onboarding": {"active", "suspended"},
    "active": {"billing_hold", "compliance_hold", "suspended"},
    "billing_hold": {"active", "suspended"},
    "compliance_hold": {"active", "suspended"},
    "suspended": {"active"}, # Only an admin can unsuspend
}
