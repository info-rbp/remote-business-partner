# rbp_platform_shell/tests/test_launch_service.py
import unittest
from rbp_platform_shell.services.launch_service import LaunchService
from rbp_platform_shell.launch.configurations import LAUNCH_CONFIGURATIONS
from rbp_platform_shell.launch.types import LaunchMethod

class TestLaunchService(unittest.TestCase):
    """
    Validates the LaunchService and its handling of launch configurations.
    """

    def setUp(self):
        # Use a fresh instance for each test
        self.service = LaunchService(LAUNCH_CONFIGURATIONS)

    def test_load_existing_config(self):
        """
        Ensures a valid configuration can be loaded.
        """
        config = self.service.get_launch_config("sales")
        self.assertIsNotNone(config)
        self.assertEqual(config["object_key"], "sales")

    def test_handle_missing_configuration(self):
        """
        Tests that readiness evaluation handles a non-existent object key.
        """
        readiness = self.service.evaluate_readiness("non_existent_module")
        self.assertFalse(readiness["is_launchable"])
        self.assertEqual(readiness["availability_state"], "inactive")
        self.assertIn("MISSING_CONFIGURATION", readiness["reason_codes"])

    def test_native_module_is_launchable(self):
        """
        Verifies a standard native module passes readiness check.
        """
        readiness = self.service.evaluate_readiness("sales")
        self.assertTrue(readiness["is_launchable"])
        self.assertEqual(readiness["availability_state"], "available")

    def test_integration_pending_is_not_launchable(self):
        """
        Verifies a module marked as 'none' launch method is not launchable.
        """
        readiness = self.service.evaluate_readiness("teams")
        self.assertFalse(readiness["is_launchable"])
        self.assertEqual(readiness["availability_state"], "pending")
        self.assertIn("INTEGRATION_PENDING", readiness["reason_codes"])

    def test_billing_hold_blocks_launch(self):
        """
        Tests that a dynamic billing_hold state correctly blocks a launch
        and returns the correct reason and remediation.
        """
        # We simulate the dynamic state by passing it as a parameter
        readiness = self.service.evaluate_readiness("lending_billing_hold", account_state="billing_hold")
        self.assertFalse(readiness["is_launchable"])
        self.assertEqual(readiness["availability_state"], "billing_hold")
        self.assertIn("ACCOUNT_PAST_DUE", readiness["reason_codes"])
        
        remediation = readiness["remediation_actions"][0]
        self.assertEqual(remediation["action_key"], "UPDATE_PAYMENT_METHOD")
        self.assertEqual(remediation["target_url"], "/portal/billing")

    def test_execute_launch_for_native_module(self):
        """
        Verifies the execution result for a native module.
        """
        execution = self.service.execute_launch("sales")
        self.assertIsNotNone(execution)
        self.assertEqual(execution["launch_method"], "native")
        self.assertEqual(execution["target_url"], "/app/modules/sales")
        self.assertFalse(execution["open_in_new_window"])

    def test_execute_launch_for_sso_module(self):
        """
        Verifies the execution result for an SSO module, ensuring a secure,
        temporary URL is generated.
        """
        execution = self.service.execute_launch("finance")
        self.assertIsNotNone(execution)
        self.assertEqual(execution["launch_method"], "sso")
        self.assertTrue(execution["target_url"].startswith("/api/method/sso/initiate"))
        self.assertTrue("quickbooks-prod" in execution["target_url"])
        self.assertTrue(execution["open_in_new_window"])

    def test_execute_launch_for_blocked_module(self):
        """
        Ensures that a blocked module cannot be executed.
        """
        execution = self.service.execute_launch("teams")
        self.assertIsNone(execution)


if __name__ == '__main__':
    unittest.main()
