# rbp_platform_shell/routing/types.py
from typing import TypedDict, List, Set
from rbp_platform_shell.states.types import AccountState
from rbp_platform_shell.entitlements.types import UserRole

class RoutePolicy(TypedDict):
    """
    Defines an access control policy for a group of routes (a "surface").
    """
    allowed_roles: Set[UserRole]
    required_account_states: Set[AccountState]
    entitlement_required: bool
    redirect_if_blocked: str
    allow_anonymous: bool

class RouteEvaluationResult(TypedDict):
    """
    The structured response from a route access evaluation.
    """
    is_allowed: bool
    redirect_target: str | None
    reason: str
