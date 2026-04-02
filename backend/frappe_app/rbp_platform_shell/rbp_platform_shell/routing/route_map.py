# rbp_platform_shell/routing/route_map.py

# This map associates URL path prefixes with a specific routing policy.
# The routing service will use this to determine which policy to apply.
# The keys are route prefixes, and the values are keys from the ROUTING_POLICY dictionary.

ROUTE_POLICY_MAP: dict[str, str] = {
    "/": "public",
    "/login": "public",
    "/register": "public",
    "/check-email": "public",
    "/portal": "portal",
    "/portal/billing": "portal",
    "/portal/compliance": "portal",
    "/admin": "admin",
    "/admin/users": "admin",
    "/app": "app",
    "/app/sales": "app",
    "/app/insights": "app",
}
