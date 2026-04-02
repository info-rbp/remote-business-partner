/**
 * @file Centralized TypeScript types and interfaces for API response models.
 *
 * This file defines the shape of data used throughout the application,
 * ensuring consistency between the frontend and any future backend services.
 */

import { AccountState } from "./state";

// =================================================================
// ECOSYSTEM & REPOSITORY MANIFEST
// =================================================================

export type TreatmentType =
  | 'native'              // Built directly into this frontend
  | 'external_reference'  // A link to an external system, docs, or repo
  | 'integration_pending' // Planned for future integration
  | 'available_in_bench'  // Available in the Frappe bench environment
  | 'submodule_candidate'; // A candidate to be a git submodule

export type ImplementationType =
  | 'react_component'     // A native part of the Next.js app
  | 'frappe_app'          // An app within the bench
  | 'external_saas'       // A third-party SaaS product
  | 'git_repository';     // A reference to a git repo

export type SurfaceRelevance =
  | 'public'
  | 'client'
  | 'admin'
  | 'internal'
  | 'all';

// Represents a repository from the repos.manifest.json
export interface RepositoryManifestItem {
  name: string;
  key: string;
  url: string;
  type: string; // e.g., "platform-native", "frappe-app"
  purpose: string;
  notes: string;
}

// Represents the mapped and enriched data for use in the frontend
export interface EcosystemCapability {
  repositoryKey: string;
  moduleFamily: string; // e.g., 'sales', 'finance'
  treatmentType: TreatmentType;
  expectedLaunchPattern: LaunchMethod;
  implementationType: ImplementationType;
  surfaceRelevance: SurfaceRelevance[];
  // Include original manifest data for reference
  manifest: RepositoryManifestItem;
}


// =================================================================
// LAUNCH MODEL
// =================================================================

export type ObjectType =
  | 'platform_module'
  | 'external_service'
  | 'admin_tool'
  | 'reporting_surface';

export type LaunchMethod = 'native' | 'embed' | 'sso' | 'redirect' | 'none';

export type ReasonCode =
  | 'ENTITLEMENT_MISSING'
  | 'BILLING_HOLD'
  | 'ONBOARDING_INCOMPLETE'
  | 'ROLE_NOT_ALLOWED'
  | 'MAINTENANCE'
  | 'NOT_CONFIGURED';

export type RemediationType =
  | 'upgrade_plan'
  | 'resolve_billing'
  | 'continue_onboarding'
  | 'contact_support'
  | 'none';

export interface Remediation {
  type: RemediationType;
  route: string;
  text?: string;
}

export interface LaunchConfig {
  method: LaunchMethod;
  route?: string;
  target_url?: string;
}

// This is the core contract for any launchable object
export interface LaunchableObject {
  object_type: ObjectType;
  key: string;
  name: string;
  description: string;
  availability: AccountState;
  launch: LaunchConfig;
  reason_codes: ReasonCode[];
  remediation: Remediation | null;
  ecosystem?: EcosystemCapability; // Optional ecosystem data
}


// =================================================================
// API RESPONSE ENVELOPES
// =================================================================

export interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  error: ApiError | null;
  meta?: Meta;
}

export interface ApiError {
  message: string;
  code?: string;
}

export interface Meta {
  timestamp: string;
  requestId: string;
}

// =================================================================
// DOMAIN MODELS
// =================================================================

// Session/Auth
export interface UserSession {
  userId: string;
  email: string;
  roles: string[];
  accountState: AccountState;
}

// Dashboard
export interface DashboardData {
  activeApplications: number;
  upcomingInvoice: string;
  teamMembers: number;
}

// Modules
export interface Module {
  id: string;
  name: string;
  description: string;
  status: AccountState;
}

// Subscription
export interface Subscription {
  planName: string;
  status: 'Active' | 'Inactive';
  price: string;
  nextBillingDate: string;
}

// Billing
export interface Invoice {
  id: string;
  date: string;
  amount: string;
  status: 'Paid' | 'Pending' | 'Failed';
}

export interface Purchase {
  id: string;
  item: string;
  date: string;
  amount: string;
}

export interface BillingDetails {
  subscriptions: Subscription[];
  purchaseHistory: Purchase[];
  invoices: Invoice[];
}

// Support Tickets
export interface SupportTicket {
  id: string;
  subject: string;
  status: 'open' | 'in_progress' | 'resolved';
  lastUpdated: string;
}

// Profile
export interface UserProfile {
  name: string;
  email: string;
}

// Launch Readiness - This is a type alias for the core contract
export type LaunchReadiness = LaunchableObject;


// Launch Execution
export interface LaunchExecution {
  success: boolean;
  redirectUrl?: string;
  message?: string;
}
