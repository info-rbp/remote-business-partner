# rbp_platform_shell/entitlements/plans.py
from .types import SubscriptionPlan, Entitlement

# This data would be stored in a "Subscription Plan" DocType in Frappe.

SUBSCRIPTION_PLANS: dict[str, SubscriptionPlan] = {
    "starter": {
        "plan_id": "starter",
        "plan_name": "Starter Plan",
        "entitlement_set": {
            "module_customers",
            "module_sales",
            "module_support",
            "service_standard_support",
        },
    },
    "professional": {
        "plan_id": "professional",
        "plan_name": "Professional Plan",
        "entitlement_set": {
            "module_customers",
            "module_sales",
            "module_support",
            "module_insights",
            "module_compliance",
            "service_priority_support",
            "doc_nda_template",
        },
    },
}

# Mapping of which entitlement is required for each module.
# This connects the entitlement system to the module registry.
MODULE_ENTITLEMENT_MAP: dict[str, Entitlement] = {
    "customers": "module_customers",
    "sales": "module_sales",
    "support": "module_support",
    "insights": "module_insights",
    "compliance": "module_compliance",
    # ... and so on for all other modules
}
