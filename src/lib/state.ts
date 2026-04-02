/**
 * @file Centralized vocabulary for account and journey states.
 *
 * This file defines the explicit states that can be used to render
 * different UI components based on the user's account status or
 * their current journey stage.
 */

// =================================================================
// STATE ENUM
// =================================================================

export enum AccountState {
  Onboarding = 'onboarding',
  Active = 'active',
  BillingHold = 'billing_hold',
  ComplianceHold = 'compliance_hold',
  Suspended = 'suspended',
  Restricted = 'restricted',
  Pending = 'pending',
  Maintenance = 'maintenance',
}

// =================================================================
// STATE METADATA
// =================================================================

export interface StateMetadata {
  label: string;
  description: string;
  variant: 'default' | 'secondary' | 'destructive' | 'outline';
}

export const STATE_METADATA: { [key in AccountState]: StateMetadata } = {
  [AccountState.Onboarding]: {
    label: 'Onboarding',
    description: 'Your account is currently being set up. Some features may be unavailable.',
    variant: 'secondary',
  },
  [AccountState.Active]: {
    label: 'Active',
    description: 'Your account is active and in good standing.',
    variant: 'default',
  },
  [AccountState.BillingHold]: {
    label: 'Billing Hold',
    description: 'There is an issue with your billing information. Please update your payment method to restore full access.',
    variant: 'destructive',
  },
  [AccountState.ComplianceHold]: {
    label: 'Compliance Hold',
    description: 'We need to verify some information before you can proceed. Please check your email for details.',
    variant: 'destructive',
  },
  [AccountState.Suspended]: {
    label: 'Suspended',
    description: 'Your account has been suspended. Please contact support for assistance.',
    variant: 'destructive',
  },
  [AccountState.Restricted]: {
    label: 'Restricted',
    description: 'Some features are restricted on your current plan. Please upgrade to unlock them.',
    variant: 'outline',
  },
  [AccountState.Pending]: {
    label: 'Pending',
    description: 'Your account is pending activation. This may take a few minutes.',
    variant: 'secondary',
  },
  [AccountState.Maintenance]: {
    label: 'Maintenance',
    description: 'The platform is currently undergoing maintenance. Some services may be temporarily unavailable.',
    variant: 'outline',
  },
};

// =================================================================
// HELPER FUNCTIONS
// =================================================================

/**
 * Gets the metadata for a given account state.
 * @param state The account state.
 * @returns The metadata for the state.
 */
export const getStateMetadata = (state: AccountState): StateMetadata => {
  return STATE_METADATA[state];
};
