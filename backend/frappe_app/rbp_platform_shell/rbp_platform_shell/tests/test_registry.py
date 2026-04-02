# rbp_platform_shell/tests/test_registry.py
import unittest
from rbp_platform_shell.services.registry_service import registry_service, RegistryService

class TestRegistryService(unittest.TestCase):
    """
    Validates the module registry and the RegistryService.
    """

    def setUp(self):
        # Explicitly create a new instance for each test to ensure isolation
        self.service = RegistryService()
        self.all_modules = self.service.list_all_modules()
        self.expected_keys = [
            "communications", "compliance", "customers", "finance", "insights",
            "knowledge", "learning", "lending", "operations", "people",
            "sales", "support", "teams"
        ]

    def test_all_expected_modules_exist(self):
        """
        Ensures that all 13 required module keys are present in the registry.
        """
        module_keys = [m["module_key"] for m in self.all_modules]
        self.assertEqual(len(self.all_modules), 13)
        for key in self.expected_keys:
            self.assertIn(key, module_keys, f"Module key '{key}' is missing from the registry.")

    def test_no_duplicate_keys(self):
        """
        Validates that there are no duplicate module keys.
        """
        module_keys = [m["module_key"] for m in self.all_modules]
        self.assertEqual(len(module_keys), len(set(module_keys)), "Found duplicate module keys in the registry.")

    def test_entries_are_structurally_valid(self):
        """
        Performs a basic structural validation on each module entry.
        """
        required_fields = [
            "module_key", "module_name", "module_family", "description",
            "surfaces", "visibility_rules", "launch_pattern",
            "entitlement_requirement", "onboarding_requirement",
            "linked_external_service", "implementation_type"
        ]
        for module in self.all_modules:
            for field in required_fields:
                self.assertIn(field, module, f"Field '{field}' is missing from module '{module.get('module_key')}'.")
            self.assertIsInstance(module["surfaces"], list)
            self.assertIsInstance(module["onboarding_requirement"], bool)

    def test_fetch_module_by_key(self):
        """
        Tests the fetch_module_by_key method.
        """
        module = self.service.fetch_module_by_key("sales")
        self.assertIsNotNone(module)
        self.assertEqual(module["module_name"], "Sales Pipeline")

        non_existent_module = self.service.fetch_module_by_key("non_existent")
        self.assertIsNone(non_existent_module)

    def test_filter_by_surface(self):
        """
        Tests the filter_by_surface method.
        """
        portal_modules = self.service.filter_by_surface("portal")
        portal_module_keys = [m["module_key"] for m in portal_modules]
        self.assertIn("lending", portal_module_keys)
        self.assertIn("support", portal_module_keys)
        self.assertNotIn("sales", portal_module_keys)
        self.assertEqual(len(portal_modules), 3) # lending, support, customers

    def test_filter_by_implementation_type(self):
        """
        Tests the filter_by_implementation_type method.
        """
        external_modules = self.service.filter_by_implementation_type("external")
        external_module_keys = [m["module_key"] for m in external_modules]
        self.assertIn("finance", external_module_keys)
        self.assertIn("people", external_module_keys)
        self.assertNotIn("sales", external_module_keys)
        self.assertEqual(len(external_modules), 3)

# This allows the test to be run from the command line
if __name__ == '__main__':
    unittest.main()
