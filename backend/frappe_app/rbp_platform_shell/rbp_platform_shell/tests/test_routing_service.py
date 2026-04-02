# rbp_platform_shell/tests/test_routing_service.py
import unittest
from rbp_platform_shell.services.routing_service import routing_service
from rbp_platform_shell.routing.types import UserRole, AccountState

class TestRoutingService(unittest.TestCase):
    """
    Validates the RoutingService and its policy enforcement.
    """

    def test_anonymous_user_requesting_public_route(self):
        """
        Anonymous users should be allowed to access public routes.
        """
        result = routing_service.evaluate_route_access(
            path="/about",
            is_authenticated=False,
            user_role=None,
            account_state="pending_activation",
        )
        self.assertTrue(result["is_allowed"])
        self.assertIsNone(result["redirect_target"])

    def test_anonymous_user_requesting_protected_route(self):
        """
        Anonymous users should be blocked from protected routes and redirected to login.
        """
        result = routing_service.evaluate_route_access(
            path="/app/dashboard",
            is_authenticated=False,
            user_role=None,
            account_state="pending_activation",
        )
        self.assertFalse(result["is_allowed"])
        self.assertEqual(result["redirect_target"], "/login")
        self.assertEqual(result["reason"], "AUTHENTICATION_REQUIRED")

    def test_authenticated_user_accessing_login_route(self):
        """
        Authenticated users trying to access /login or /register should be redirected.
        """
        result = routing_service.evaluate_route_access(
            path="/login",
            is_authenticated=True,
            user_role="user",
            account_state="active",
        )
        self.assertFalse(result["is_allowed"])
        self.assertEqual(result["redirect_target"], "/app/dashboard")
        self.assertEqual(result["reason"], "ALREADY_AUTHENTICATED")

    def test_client_user_requesting_admin_route(self):
        """
        A user with 'user' role should be blocked from admin routes.
        """
        result = routing_service.evaluate_route_access(
            path="/admin/users",
            is_authenticated=True,
            user_role="user",
            account_state="active",
        )
        self.assertFalse(result["is_allowed"])
        self.assertEqual(result["redirect_target"], "/")
        self.assertEqual(result["reason"], "UNAUTHORIZED_ROLE")

    def test_suspended_user_requesting_app_route(self):
        """
        A suspended user should be blocked from app routes and redirected.
        """
        result = routing_service.evaluate_route_access(
            path="/app/dashboard",
            is_authenticated=True,
            user_role="user",
            account_state="suspended",
        )
        self.assertFalse(result["is_allowed"])
        self.assertEqual(result["redirect_target"], "/suspended-account")
        self.assertEqual(result["reason"], "ACCOUNT_SUSPENDED")

    def test_billing_hold_user_requesting_restricted_module_route(self):
        """
        A user with billing hold should be blocked from app module routes.
        """
        result = routing_service.evaluate_route_access(
            path="/app/sales",
            is_authenticated=True,
            user_role="user",
            account_state="billing_hold",
        )
        self.assertFalse(result["is_allowed"])
        self.assertEqual(result["redirect_target"], "/portal/billing")
        self.assertEqual(result["reason"], "ACCOUNT_BILLING_HOLD")

    def test_active_user_requesting_app_route_with_entitlement(self):
        """
        An active user should be allowed to access an app module with entitlement.
        """
        # This test relies on entitlement_service to pass the check for 'sales'
        result = routing_service.evaluate_route_access(
            path="/app/sales",
            is_authenticated=True,
            user_role="user",
            account_state="active",
            user_plan_id="starter", # 'starter' plan includes 'module_sales'
        )
        self.assertTrue(result["is_allowed"])
        self.assertIsNone(result["redirect_target"])

    def test_active_user_requesting_app_route_without_entitlement(self):
        """
        An active user should be blocked from an app module without entitlement.
        """
        # 'starter' plan does NOT include 'module_insights'
        result = routing_service.evaluate_route_access(
            path="/app/insights",
            is_authenticated=True,
            user_role="user",
            account_state="active",
            user_plan_id="starter",
        )
        self.assertFalse(result["is_allowed"])
        self.assertEqual(result["redirect_target"], "/app/dashboard") # Redirect to app dashboard if specific module blocked
        self.assertEqual(result["reason"], "MISSING_ENTITLEMENT")

if __name__ == '__main__':
    unittest.main()
