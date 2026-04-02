# rbp_platform_shell/tests/test_entitlement_service.py
import unittest
from rbp_platform_shell.services.entitlement_service import entitlement_service
from rbp_platform_shell.entitlements.types import EntitlementOverride

class TestEntitlementService(unittest.TestCase):
    """
    Validates the EntitlementService with various test cases.
    """

    def test_active_account_with_valid_plan(self):
        """
        An active user on the 'starter' plan should have access to 'sales'.
        """
        result = entitlement_service.check_module_access(
            module_key="sales",
            plan_id="starter",
            account_state="active",
            user_role="user"
        )
        self.assertTrue(result["is_allowed"])
        self.assertEqual(result["reason_code"], "ENTITLEMENT_GRANTED")
        self.assertIn("module_sales", result["matched_entitlements"])

    def test_missing_entitlement(self):
        """
        A 'starter' plan user should NOT have access to 'insights'.
        """
        result = entitlement_service.check_module_access(
            module_key="insights",
            plan_id="starter",
            account_state="active",
            user_role="user"
        )
        self.assertFalse(result["is_allowed"])
        self.assertEqual(result["reason_code"], "MISSING_ENTITLEMENT")
        self.assertIsNotNone(result["remediation_hint"])

    def test_billing_hold_blocks_access(self):
        """
        A 'professional' plan user on billing hold should be blocked from 'insights'.
        """
        result = entitlement_service.check_module_access(
            module_key="insights",
            plan_id="professional",
            account_state="billing_hold",
            user_role="user"
        )
        self.assertFalse(result["is_allowed"])
        self.assertEqual(result["reason_code"], "BILLING_HOLD")

    def test_suspended_account_blocks_access(self):
        """
        A suspended 'professional' plan user should be blocked from 'insights'.
        """
        result = entitlement_service.check_module_access(
            module_key="insights",
            plan_id="professional",
            account_state="suspended",
            user_role="user"
        )
        self.assertFalse(result["is_allowed"])
        self.assertEqual(result["reason_code"], "ACCOUNT_SUSPENDED")

    def test_manual_grant_override(self):
        """
        A 'starter' plan user with a manual override should get access to 'insights'.
        """
        overrides: list[EntitlementOverride] = [
            {
                "override_id": "ovr_123",
                "override_type": "manual",
                "action": "grant",
                "entitlement": "module_insights",
            }
        ]
        result = entitlement_service.check_module_access(
            module_key="insights",
            plan_id="starter",
            account_state="active",
            user_role="user",
            overrides=overrides
        )
        self.assertTrue(result["is_allowed"])
        self.assertEqual(result["reason_code"], "ENTITLEMENT_GRANTED")

    def test_manual_revoke_override(self):
        """
        A 'starter' plan user should lose access to 'sales' if it's revoked.
        """
        overrides: list[EntitlementOverride] = [
            {
                "override_id": "ovr_456",
                "override_type": "manual",
                "action": "revoke",
                "entitlement": "module_sales",
            }
        ]
        result = entitlement_service.check_module_access(
            module_key="sales",
            plan_id="starter",
            account_state="active",
            user_role="user",
            overrides=overrides
        )
        self.assertFalse(result["is_allowed"])
        self.assertEqual(result["reason_code"], "MISSING_ENTITLEMENT")
        
    def test_admin_has_access(self):
        """
        An admin should have access even without a plan.
        """
        result = entitlement_service.check_module_access(
            module_key="insights",
            plan_id="starter",
            account_state="active",
            user_role="admin"
        )
        self.assertTrue(result["is_allowed"])
        self.assertEqual(result["reason_code"], "ADMIN_ACCESS")


if __name__ == '__main__':
    unittest.main()
