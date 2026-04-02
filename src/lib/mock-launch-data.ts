import { LaunchableObject } from './types';

export const mockLaunchData: LaunchableObject[] = [
  {
    object_type: 'platform_module',
    key: 'sales',
    name: 'Sales',
    availability: 'available',
    launch: {
      method: 'native',
      route: '/app/modules/sales',
    },
    reason_codes: [],
    remediation: null,
  },
  {
    object_type: 'platform_module',
    key: 'customers',
    name: 'Customers',
    availability: 'available',
    launch: {
      method: 'native',
      route: '/app/modules/customers',
    },
    reason_codes: [],
    remediation: null,
  },
  {
    object_type: 'platform_module',
    key: 'finance',
    name: 'Finance',
    availability: 'restricted',
    launch: {
      method: 'none',
    },
    reason_codes: ['ENTITLEMENT_MISSING'],
    remediation: {
      type: 'upgrade_plan',
      route: '/portal/membership',
    },
  },
  {
    object_type: 'platform_module',
    key: 'insights',
    name: 'Insights',
    availability: 'pending',
    launch: {
      method: 'none',
    },
    reason_codes: ['ONBOARDING_INCOMPLETE'],
    remediation: {
      type: 'continue_onboarding',
      route: '/app/onboarding/insights',
    },
  },
  {
    object_type: 'external_service',
    key: 'docushare',
    name: 'DocuShare',
    availability: 'available',
    launch: {
      method: 'sso',
      target_url: 'https://docushare.example.com',
    },
    reason_codes: [],
    remediation: null,
  },
  {
    object_type: 'admin_tool',
    key: 'user-management',
    name: 'User Management',
    availability: 'available',
    launch: {
      method: 'native',
      route: '/admin/users',
    },
    reason_codes: [],
    remediation: null,
  },
  {
    object_type: 'reporting_surface',
    key: 'sales-dashboard',
    name: 'Sales Dashboard',
    availability: 'billing_hold',
    launch: {
      method: 'none',
    },

    reason_codes: ['BILLING_HOLD'],
    remediation: {
      type: 'resolve_billing',
      route: '/portal/billing',
    },
  },
];
