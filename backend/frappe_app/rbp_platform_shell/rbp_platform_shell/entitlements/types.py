# rbp_platform_shell/entitlements/types.py
from typing import List, Literal, TypedDict, Set

# Define literal types for strong typing
Entitlement = str  # e.g., "module_sales", "doc_nda", "service_priority_support"
AccountState = Literal["active", "billing_hold", "suspended", "onboarding"]
UserRole = Literal["user", "client", "admin"]

class EntitlementResult(TypedDict):
    """
    The structured response from an entitlement check.
    """
    is_allowed: bool
    reason_code: str  # e.g., "ENTITLEMENT_GRANTED", "ACCOUNT_SUSPENDED", "MISSING_ENTITLEMENT"
    matched_entitlements: List[Entitlement]
    remediation_hint: str | None # e.g., "Upgrade to the Professional plan to access this feature."

class SubscriptionPlan(TypedDict):
    """
    Defines a commercial subscription plan and its base set of entitlements.
    """
    plan_id: str
    plan_name: str
    entitlement_set: Set[Entitlement]

class EntitlementOverride(TypedDict):
    """
    Defines an override that can grant or revoke entitlements for a specific user.
    """
    override_id: str
    override_type: Literal["manual", "admin", "temporary"]
    action: Literal["grant", "revoke"]
    entitlement: Entitlement
    # 'expires_at' would be used for 'temporary' overrides in a real implementation
