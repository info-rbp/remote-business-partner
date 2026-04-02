/**
 * @file Centralized route definitions for the entire application.
 *
 * This file serves as the single source of truth for all route paths, names,
 * and groupings across the four primary surfaces: Public, Portal, Admin, and App.
 *
 * By centralizing route definitions, we ensure consistency and maintainability,
 * making it easier to manage navigation, middleware, and linking throughout the app.
 */

import { AdminRole, ClientRole, UserRole } from "@/lib/auth";

// Lightweight typing for a single route definition
export interface RouteDefinition {
  name: string;
  path: string;
  roles?: UserRole[]; // Optional roles for access control
}

// Typing for a group of routes, like a surface or a module family
export interface RouteGroup {
  [key: string]: RouteDefinition | RouteGroup;
}

// Helper function to create a route definition
const createRoute = (name: string, path: string, roles?: UserRole[]): RouteDefinition => ({ name, path, roles });

// =================================================================
// PUBLIC SURFACE
// =================================================================
const PUBLIC_ROUTES = {
  home: createRoute('Home', '/'),
  docushare: createRoute('DocuShare', '/docushare'),
  applications: createRoute('Applications', '/applications'),
  membership: createRoute('Membership', '/membership'),
  offers: createRoute('Offers', '/offers'),
  resources: createRoute('Resources', '/resources'),
  help: createRoute('Help', '/help'),
  contact: createRoute('Contact', '/contact'),
  signIn: createRoute('Sign In', '/sign-in'),
  register: createRoute('Register', '/register'),
  forgotPassword: createRoute('Forgot Password', '/forgot-password'),
  resetPassword: createRoute('Reset Password', '/reset-password'),
  authCallback: createRoute('Auth Callback', '/auth/callback'),
};

// =================================================================
// CLIENT PORTAL SURFACE
// =================================================================
const PORTAL_ROUTES = {
  dashboard: createRoute('Dashboard', '/portal/dashboard'),
  membership: createRoute('Membership', '/portal/membership'),
  billing: createRoute('Billing', '/portal/billing', [ClientRole.AccountOwner, ClientRole.BillingContact]),
  docushare: createRoute('DocuShare', '/portal/docushare'),
  applications: createRoute('Applications', '/portal/applications'),
  support: createRoute('Support', '/portal/support'),
  resources: createRoute('Resources', '/portal/resources'),
  profile: createRoute('Profile', '/portal/profile'),
  team: createRoute('Team', '/portal/team', [ClientRole.AccountOwner, ClientRole.TeamAdmin]),
  security: createRoute('Security', '/portal/security'),
};

// =================================================================
// ADMIN PORTAL SURFACE
// =================================================================
const ADMIN_ROUTES = {
  dashboard: createRoute('Dashboard', '/admin/dashboard'),
  content: createRoute('Content', '/admin/content', [AdminRole.PlatformAdmin, AdminRole.ContentAdmin]),
  docushare: createRoute('DocuShare', '/admin/docushare', [AdminRole.PlatformAdmin, AdminRole.ContentAdmin]),
  memberships: createRoute('Memberships', '/admin/memberships', [AdminRole.PlatformAdmin, AdminRole.FinanceAdmin]),
  entitlements: createRoute('Entitlements', '/admin/entitlements', [AdminRole.PlatformAdmin, AdminRole.OperationsAdmin]),
  applications: createRoute('Applications', '/admin/applications', [AdminRole.PlatformAdmin, AdminRole.OperationsAdmin]),
  customers: createRoute('Customers', '/admin/customers', [AdminRole.PlatformAdmin, AdminRole.SupportAdmin]),
  support: createRoute('Support', '/admin/support', [AdminRole.PlatformAdmin, AdminRole.SupportAdmin]),
  billing: createRoute('Billing', '/admin/billing', [AdminRole.PlatformAdmin, AdminRole.FinanceAdmin]),
  analytics: createRoute('Analytics', '/admin/analytics', [AdminRole.PlatformAdmin]),
  permissions: createRoute('Permissions', '/admin/permissions', [AdminRole.PlatformAdmin]),
  audit: createRoute('Audit', '/admin/audit', [AdminRole.PlatformAdmin, AdminRole.ComplianceAdmin]),
  settings: createRoute('Settings', '/admin/settings', [AdminRole.PlatformAdmin]),
};

// =================================================================
// APPLICATION LAYER SURFACE
// =================================================================
const APP_ROUTES = {
  dashboard: createRoute('Dashboard', '/app/dashboard'),
  modules: {
    index: createRoute('Modules', '/app/modules'),
    customers: createRoute('Customers', '/app/modules/customers'),
    sales: createRoute('Sales', '/app/modules/sales'),
    operations: createRoute('Operations', '/app/modules/operations'),
    finance: createRoute('Finance', '/app/modules/finance'),
    lending: createRoute('Lending', '/app/modules/lending'),
    compliance: createRoute('Compliance', '/app/modules/compliance'),
    people: createRoute('People', '/app/modules/people'),
    support: createRoute('Support', '/app/modules/support'),
    knowledge: createRoute('Knowledge', '/app/modules/knowledge'),
    learning: createRoute('Learning', '/app/modules/learning'),
    communications: createRoute('Communications', '/app/modules/communications'),
    teams: createRoute('Teams', '/app/modules/teams'),
    insights: createRoute('Insights', '/app/modules/insights'),
  },
  subscription: createRoute('Subscription', '/app/subscription'),
  settings: createRoute('Settings', '/app/settings'),
};

// =================================================================
// CONSOLIDATED ROUTE CONTRACT
// =================================================================
export const ROUTES = {
  public: PUBLIC_ROUTES,
  portal: PORTAL_ROUTES,
  admin: ADMIN_ROUTES,
  app: APP_ROUTES,
};

// =================================================================
// ROUTE HELPERS
// =================================================================

/**
 * Checks if a given path belongs to the admin surface.
 * @param path The path to check.
 * @returns True if the path is an admin path, false otherwise.
 */
export const isAdminPath = (path: string): boolean => {
    return path.startsWith('/admin');
};
