# rbp_platform_shell/services/state_service.py
from rbp_platform_shell.states.types import AccountState, TransitionResult
from rbp_platform_shell.states.definitions import ACCOUNT_STATES, VALID_TRANSITIONS

class StateService:
    """
    This service manages and validates transitions between customer account states.
    It uses the structured definitions to ensure all state changes are valid.
    It implements the logic defined in backend/models/account_state_model.md.
    """

    def get_state_metadata(self, state: AccountState):
        """
        Retrieves the machine-readable metadata for a given state.
        """
        return ACCOUNT_STATES.get(state)

    def transition(self, current_state: AccountState, new_state: AccountState) -> TransitionResult:
        """
        Attempts to transition an account from its current state to a new one.
        Validates the transition against the defined state machine rules.
        """
        if current_state not in VALID_TRANSITIONS:
            return TransitionResult(
                is_valid=False,
                new_state=None,
                reason=f"Invalid current state: '{current_state}'.",
            )

        if new_state in VALID_TRANSITIONS.get(current_state, set()):
            # The transition is valid
            new_metadata = self.get_state_metadata(new_state)
            old_metadata = self.get_state_metadata(current_state)
            
            # Surface what changes in access behavior
            if new_metadata and old_metadata and new_metadata["launches_allowed"] != old_metadata["launches_allowed"]:
                access_change = "gained" if new_metadata["launches_allowed"] else "lost"
                reason = f"Transition from '{current_state}' to '{new_state}' is valid. Module launch access will be {access_change}."
            else:
                 reason = f"Transition from '{current_state}' to '{new_state}' is valid."
            
            return TransitionResult(
                is_valid=True,
                new_state=new_state,
                reason=reason,
            )
        else:
            # The transition is invalid
            return TransitionResult(
                is_valid=False,
                new_state=None,
                reason=f"Invalid transition from '{current_state}' to '{new_state}'.",
            )

# Singleton instance for easy access
state_service = StateService()
