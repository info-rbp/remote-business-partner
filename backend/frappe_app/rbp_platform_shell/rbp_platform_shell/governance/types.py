# rbp_platform_shell/governance/types.py
from typing import TypedDict, List, Literal, Set

AdminSurface = Literal["frappe_desk", "custom_admin_ui"]
ApprovalSensitivity = Literal["low", "medium", "high", "critical"]
AuditImportance = Literal["low", "medium", "high"]

class ManagedRecordType(TypedDict):
    """
    Defines a record type that administrators can manage.
    """
    record_name: str # e.g., "Platform Module", "Subscription Plan"
    doc_type: str # Frappe DocType name
    is_editable: bool
    is_read_only_in_custom_ui: bool # If custom UI should limit editing
    caution_level: ApprovalSensitivity

class ManagedDomain(TypedDict):
    """
    Defines a domain of administrative governance.
    """
    domain_key: str
    domain_name: str
    intended_admin_surface: AdminSurface
    managed_records: List[ManagedRecordType]
    expected_approval_sensitivity: ApprovalSensitivity
    audit_importance: AuditImportance

class AdminGovernanceConfig(TypedDict):
    """
    The overall configuration for admin governance.
    """
    governance_domains: List[ManagedDomain]
