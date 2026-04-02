# rbp_platform_shell/states/types.py
from typing import TypedDict, List, Literal, Set

AccountState = Literal[
    "pending_activation",
    "onboarding",
    "active",
    "billing_hold",
    "compliance_hold",
    "suspended",
]

class StateMetadata(TypedDict):
    """
    Defines the structured metadata for each account state.
    """
    state: AccountState
    description: str
    allowed_actions: List[str]
    blocked_actions: List[str]
    remediation_route: str | None
    launches_allowed: bool

class TransitionResult(TypedDict):
    """
    The structured response from a state transition attempt.
    """
    is_valid: bool
    new_state: AccountState | None
    reason: str
