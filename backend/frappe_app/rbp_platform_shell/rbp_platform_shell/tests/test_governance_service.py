# rbp_platform_shell/tests/test_governance_service.py
import unittest
from rbp_platform_shell.services.governance_service import governance_service
from rbp_platform_shell.governance.types import AdminSurface, ApprovalSensitivity, AuditImportance

class TestGovernanceService(unittest.TestCase):
    """
    Validates the AdminGovernanceConfig and GovernanceService.
    """

    def test_all_governance_domains_exist(self):
        """
        Ensures that all expected governance domains are present.
        """
        domains = governance_service.get_all_governance_domains()
        self.assertGreater(len(domains), 0)
        domain_keys = {d["domain_key"] for d in domains}
        expected_keys = {"modules", "launches", "entitlements", "integrations", "visibility_navigation"}
        self.assertEqual(domain_keys, expected_keys)

    def test_domain_structure_and_metadata(self):
        """
        Checks the structure and types of a sample domain.
        """
        modules_domain = governance_service.get_domain_by_key("modules")
        self.assertIsNotNone(modules_domain)
        self.assertEqual(modules_domain["domain_name"], "Module Management")
        self.assertEqual(modules_domain["intended_admin_surface"], "custom_admin_ui")
        self.assertEqual(modules_domain["expected_approval_sensitivity"], "medium")
        self.assertEqual(modules_domain["audit_importance"], "high")
        self.assertIsInstance(modules_domain["managed_records"], list)
        self.assertGreater(len(modules_domain["managed_records"]), 0)

    def test_managed_record_type_structure(self):
        """
        Checks the structure of a sample managed record type.
        """
        entitlements_domain = governance_service.get_domain_by_key("entitlements")
        self.assertIsNotNone(entitlements_domain)
        subscription_plan_record = next(r for r in entitlements_domain["managed_records"] if r["record_name"] == "Subscription Plan")
        
        self.assertIsNotNone(subscription_plan_record)
        self.assertEqual(subscription_plan_record["doc_type"], "Subscription Plan")
        self.assertTrue(subscription_plan_record["is_editable"])
        self.assertFalse(subscription_plan_record["is_read_only_in_custom_ui"])
        self.assertEqual(subscription_plan_record["caution_level"], "critical")

    def test_get_managed_record_types_for_domain(self):
        """
        Ensures the helper can retrieve managed record types correctly.
        """
        launch_records = governance_service.get_managed_record_types_for_domain("launches")
        self.assertEqual(len(launch_records), 1)
        self.assertEqual(launch_records[0]["record_name"], "Launch Configuration")

        non_existent_records = governance_service.get_managed_record_types_for_domain("non_existent")
        self.assertEqual(len(non_existent_records), 0)


if __name__ == '__main__':
    unittest.main()
