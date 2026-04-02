# rbp_platform_shell/launch/configurations.py
# This file contains example launch configurations. In a real Frappe implementation,
# this data would be stored in the database as DocType records.

LAUNCH_CONFIGURATIONS = {
    # 1. Native Module Example
    "sales": {
        "object_type": "module",
        "object_key": "sales",
        "launch_method": "native",
        "availability_state": "available", # Default state, can be overridden by readiness checks
        "reason_codes": [],
        "remediation_actions": [],
        "allowed_surfaces": ["app", "admin"],
        "target_resolution_metadata": {
            "internal_route": "/app/modules/sales"
        },
        "open_in_new_window": False,
    },

    # 2. External Service Example (SSO)
    "finance": {
        "object_type": "module",
        "object_key": "finance",
        "launch_method": "sso",
        "availability_state": "available",
        "reason_codes": [],
        "remediation_actions": [],
        "allowed_surfaces": ["app", "admin"],
        "target_resolution_metadata": {
            # In a real scenario, this would contain info needed to build the SSO request
            "sso_provider": "internal_auth",
            "partner_service_id": "quickbooks-prod"
        },
        "open_in_new_window": True,
    },

    # 3. Integration-Pending Example
    "teams": {
        "object_type": "module",
        "object_key": "teams",
        "launch_method": "none",
        "availability_state": "pending",
        "reason_codes": ["INTEGRATION_PENDING"],
        "remediation_actions": [],
        "allowed_surfaces": ["app"],
        "target_resolution_metadata": {},
        "open_in_new_window": False,
    },

    # 4. Blocked/Billing-Hold Example
    "lending_billing_hold": {
        "object_type": "module",
        "object_key": "lending",
        "launch_method": "sso",
        "availability_state": "billing_hold", # This would be determined dynamically
        "reason_codes": ["ACCOUNT_PAST_DUE"],
        "remediation_actions": [
            {
                "action_key": "UPDATE_PAYMENT_METHOD",
                "display_text": "Update Billing Info",
                "target_url": "/portal/billing",
            }
        ],
        "allowed_surfaces": ["app", "admin", "portal"],
        "target_resolution_metadata": {
            "sso_provider": "internal_auth",
            "partner_service_id": "plaid-prod"
        },
        "open_in_new_window": True,
    },
}
