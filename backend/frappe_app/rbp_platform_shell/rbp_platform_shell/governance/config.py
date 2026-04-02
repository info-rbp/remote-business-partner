# rbp_platform_shell/governance/config.py
from .types import AdminGovernanceConfig, AdminSurface, ApprovalSensitivity, AuditImportance

# This configuration defines how administrators manage various aspects of the platform.
# It serves as a structured policy for administrative tools (Frappe Desk or custom UI).

ADMIN_GOVERNANCE_CONFIG: AdminGovernanceConfig = {
    "governance_domains": [
        {
            "domain_key": "modules",
            "domain_name": "Module Management",
            "intended_admin_surface": "custom_admin_ui",
            "managed_records": [
                {
                    "record_name": "Platform Module Definition",
                    "doc_type": "Platform Module",
                    "is_editable": True,
                    "is_read_only_in_custom_ui": False,
                    "caution_level": "medium",
                },
            ],
            "expected_approval_sensitivity": "medium",
            "audit_importance": "high",
        },
        {
            "domain_key": "launches",
            "domain_name": "Launch Configuration Management",
            "intended_admin_surface": "frappe_desk",
            "managed_records": [
                {
                    "record_name": "Launch Configuration",
                    "doc_type": "Launch Configuration",
                    "is_editable": True,
                    "is_read_only_in_custom_ui": False, # Would be managed directly in Frappe Desk typically
                    "caution_level": "high",
                },
            ],
            "expected_approval_sensitivity": "high",
            "audit_importance": "high",
        },
        {
            "domain_key": "entitlements",
            "domain_name": "Entitlement & Subscription Management",
            "intended_admin_surface": "custom_admin_ui",
            "managed_records": [
                {
                    "record_name": "Subscription Plan",
                    "doc_type": "Subscription Plan",
                    "is_editable": True,
                    "is_read_only_in_custom_ui": False,
                    "caution_level": "critical",
                },
                {
                    "record_name": "Entitlement Override",
                    "doc_type": "Entitlement Override",
                    "is_editable": True,
                    "is_read_only_in_custom_ui": False,
                    "caution_level": "high",
                },
            ],
            "expected_approval_sensitivity": "critical",
            "audit_importance": "high",
        },
        {
            "domain_key": "integrations",
            "domain_name": "Integration Connection Management",
            "intended_admin_surface": "custom_admin_ui",
            "managed_records": [
                {
                    "record_name": "External Service Reference",
                    "doc_type": "External Service Reference",
                    "is_editable": True,
                    "is_read_only_in_custom_ui": False,
                    "caution_level": "medium",
                },
                {
                    "record_name": "Integration Connection",
                    "doc_type": "Integration Connection",
                    "is_editable": True,
                    "is_read_only_in_custom_ui": False,
                    "caution_level": "high",
                },
            ],
            "expected_approval_sensitivity": "high",
            "audit_importance": "high",
        },
        {
            "domain_key": "visibility_navigation",
            "domain_name": "Visibility & Navigation Management",
            "intended_admin_surface": "frappe_desk", # Or potentially a lightweight custom UI
            "managed_records": [
                {
                    "record_name": "Navigation Rule",
                    "doc_type": "Navigation Rule",
                    "is_editable": True,
                    "is_read_only_in_custom_ui": False,
                    "caution_level": "medium",
                },
            ],
            "expected_approval_sensitivity": "medium",
            "audit_importance": "medium",
        },
    ]
}
