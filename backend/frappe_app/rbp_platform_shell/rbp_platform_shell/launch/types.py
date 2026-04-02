# rbp_platform_shell/launch/types.py
from typing import List, Dict, Any, Literal, TypedDict, Optional

# Define literal types for strong typing
LaunchMethod = Literal["native", "embed", "sso", "redirect", "none"]
AvailabilityState = Literal[
    "available", "restricted", "pending", "onboarding_required",
    "billing_hold", "compliance_hold", "inactive", "maintenance"
]

class RemediationAction(TypedDict):
    """
    A structured object representing an action a user can take to resolve a blocked state.
    """
    action_key: str  # e.g., "UPDATE_PAYMENT_METHOD"
    display_text: str # e.g., "Update Billing Info"
    target_url: Optional[str] # e.g., "/portal/billing"

class LaunchReadinessResult(TypedDict):
    """
    The structured response from a readiness check.
    """
    is_launchable: bool
    availability_state: AvailabilityState
    reason_codes: List[str]
    remediation_actions: List[RemediationAction]

class LaunchExecutionResult(TypedDict):
    """
    The structured response after a successful launch execution.
    """
    launch_method: LaunchMethod
    target_url: str
    open_in_new_window: bool
    metadata: Dict[str, Any]
