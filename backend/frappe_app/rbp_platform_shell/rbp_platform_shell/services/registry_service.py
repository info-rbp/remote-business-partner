# rbp_platform_shell/services/registry_service.py
from rbp_platform_shell.registry.modules import MODULE_REGISTRY

class RegistryService:
    """
    This service provides a queryable interface to the module registry.
    It implements the logic defined in backend/models/module_registry.md.
    """

    def __init__(self):
        self._registry = MODULE_REGISTRY

    def list_all_modules(self):
        """
        Returns a list of all module dictionaries.
        """
        return list(self._registry.values())

    def fetch_module_by_key(self, module_key):
        """
        Fetches a single module by its unique key.
        Returns the module dictionary or None if not found.
        """
        return self._registry.get(module_key)

    def filter_by_surface(self, surface):
        """
        Returns a list of modules that are available on the specified surface.
        """
        return [
            module for module in self.list_all_modules()
            if surface in module.get("surfaces", [])
        ]

    def filter_by_implementation_type(self, implementation_type):
        """
        Returns a list of modules that match the specified implementation type.
        """
        return [
            module for module in self.list_all_modules()
            if module.get("implementation_type") == implementation_type
        ]

# Singleton instance for easy access
registry_service = RegistryService()
