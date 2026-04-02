# rbp_platform_shell/services/governance_service.py
from rbp_platform_shell.governance.config import ADMIN_GOVERNANCE_CONFIG
from rbp_platform_shell.governance.types import AdminGovernanceConfig, ManagedDomain, ManagedRecordType
from typing import List, Dict, Any

class GovernanceService:
    """
    This service provides access to the administrative governance configuration.
    It allows admin UIs (Frappe Desk or custom) to understand how to manage
    different platform components.
    It implements the logic defined in backend/docs/admin_governance.md.
    """

    def __init__(self):
        self._config: AdminGovernanceConfig = ADMIN_GOVERNANCE_CONFIG
        self._domains_by_key: Dict[str, ManagedDomain] = {
            domain["domain_key"]: domain for domain in self._config["governance_domains"]
        }

    def get_all_governance_domains(self) -> List[ManagedDomain]:
        """
        Returns a list of all defined governance domains.
        """
        return self._config["governance_domains"]

    def get_domain_by_key(self, domain_key: str) -> ManagedDomain | None:
        """
        Fetches a single governance domain by its unique key.
        """
        return self._domains_by_key.get(domain_key)

    def get_managed_record_types_for_domain(self, domain_key: str) -> List[ManagedRecordType]:
        """
        Returns a list of managed record types within a specific domain.
        """
        domain = self.get_domain_by_key(domain_key)
        return domain["managed_records"] if domain else []

# Singleton instance for easy access
governance_service = GovernanceService()
