# rbp_platform_shell/tests/test_state_service.py
import unittest
from rbp_platform_shell.services.state_service import state_service

class TestStateService(unittest.TestCase):
    """
    Validates the account state definitions and the StateService transition logic.
    """

    def test_all_states_have_metadata(self):
        """
        Ensures every defined state has corresponding metadata.
        """
        states = [
            "pending_activation", "onboarding", "active",
            "billing_hold", "compliance_hold", "suspended"
        ]
        for state in states:
            metadata = state_service.get_state_metadata(state)
            self.assertIsNotNone(metadata)
            self.assertEqual(metadata["state"], state)
            self.assertIsInstance(metadata["launches_allowed"], bool)

    def test_valid_transition_pending_to_onboarding(self):
        result = state_service.transition("pending_activation", "onboarding")
        self.assertTrue(result["is_valid"])
        self.assertEqual(result["new_state"], "onboarding")

    def test_valid_transition_onboarding_to_active(self):
        result = state_service.transition("onboarding", "active")
        self.assertTrue(result["is_valid"])
        self.assertEqual(result["new_state"], "active")
        self.assertIn("gained", result["reason"]) # Check for access change message

    def test_valid_transition_active_to_billing_hold(self):
        result = state_service.transition("active", "billing_hold")
        self.assertTrue(result["is_valid"])
        self.assertEqual(result["new_state"], "billing_hold")
        self.assertIn("lost", result["reason"]) # Check for access change message

    def test_valid_transition_active_to_compliance_hold(self):
        result = state_service.transition("active", "compliance_hold")
        self.assertTrue(result["is_valid"])
        self.assertEqual(result["new_state"], "compliance_hold")

    def test_valid_transition_active_to_suspended(self):
        result = state_service.transition("active", "suspended")
        self.assertTrue(result["is_valid"])
        self.assertEqual(result["new_state"], "suspended")

    def test_valid_transition_billing_hold_to_active(self):
        result = state_service.transition("billing_hold", "active")
        self.assertTrue(result["is_valid"])
        self.assertEqual(result["new_state"], "active")
        self.assertIn("gained", result["reason"])

    def test_invalid_transition_onboarding_to_billing_hold(self):
        """
        A user cannot go directly from onboarding to billing hold.
        """
        result = state_service.transition("onboarding", "billing_hold")
        self.assertFalse(result["is_valid"])
        self.assertIsNone(result["new_state"])
        self.assertIn("Invalid transition", result["reason"])

    def test_invalid_transition_suspended_to_onboarding(self):
        """
        A suspended account cannot go back to onboarding, only to active.
        """
        result = state_service.transition("suspended", "onboarding")
        self.assertFalse(result["is_valid"])

    def test_invalid_current_state(self):
        """
        Tests handling of a non-existent current state.
        """
        # Here we violate the type hint for testing purposes
        result = state_service.transition("non_existent_state", "active")
        self.assertFalse(result["is_valid"])
        self.assertIn("Invalid current state", result["reason"])

if __name__ == '__main__':
    unittest.main()
