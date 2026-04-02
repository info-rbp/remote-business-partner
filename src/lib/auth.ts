/**
 * @file Frontend-safe user type and role definitions, with mock utilities for Stage 1.
 *
 * This file provides the necessary types and placeholder logic to build a
 * role-aware UI without implementing real security enforcement on the frontend.
 * The exported functions and types are designed to be replaced by backend-driven
 * session/account state in a later stage.
 */

// =================================================================
// USER TYPES & ROLES
// =================================================================

export enum UserType {
  Public = 'public',
  Client = 'client',
  Admin = 'admin',
}

export enum ClientRole {
  AccountOwner = 'client_account_owner',
  BillingContact = 'client_billing_contact',
  TeamAdmin = 'client_team_admin',
  StandardUser = 'client_standard_user',
  ReadOnlyUser = 'client_read_only_user',
}

export enum AdminRole {
  PlatformAdmin = 'admin_platform_admin',
  OperationsAdmin = 'admin_operations_admin',
  FinanceAdmin = 'admin_finance_admin',
  SupportAdmin = 'admin_support_admin',
  ContentAdmin = 'admin_content_admin',
  ComplianceAdmin = 'admin_compliance_admin',
}

export type UserRole = ClientRole | AdminRole;

// =================================================================
// USER INTERFACE
// =================================================================

export interface User {
  id: string;
  name: string;
  email: string;
  type: UserType;
  roles: UserRole[];
}

// =================================================================
// MOCK USER DATA (STAGE 1 PLACEHOLDER)
// =================================================================

const mockUsers: { [key: string]: User } = {
  platformAdmin: {
    id: 'admin-001',
    name: 'Platform Admin',
    email: 'admin@example.com',
    type: UserType.Admin,
    roles: [AdminRole.PlatformAdmin],
  },
  clientOwner: {
    id: 'client-001',
    name: 'Client Owner',
    email: 'owner@example.com',
    type: UserType.Client,
    roles: [ClientRole.AccountOwner, ClientRole.BillingContact],
  },
};

// =================================================================
// MOCK ROLE-RESOLUTION UTILITIES (STAGE 1 PLACEHOLDER)
// =================================================================

/**
 * A mock function to simulate retrieving the current user's data.
 * In a real application, this would be replaced by a call to a server-side
 * session management utility.
 *
 * @returns The mock user object.
 */
export const getMockUser = (role: keyof typeof mockUsers = 'platformAdmin'): User => {
  return mockUsers[role];
};

/**
 * Checks if a user has any of the specified roles.
 *
 * @param user The user object.
 * @param requiredRoles An array of roles to check for.
 * @returns True if the user has at least one of the required roles, false otherwise.
 */
export const hasRole = (user: User, requiredRoles: UserRole[]): boolean => {
  if (!requiredRoles || requiredRoles.length === 0) {
    return true; // No roles required, so access is granted.
  }
  return user.roles.some(role => requiredRoles.includes(role));
};
