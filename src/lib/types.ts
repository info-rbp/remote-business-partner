export type ObjectType = 
  | 'platform_module'
  | 'external_service'
  | 'admin_tool'
  | 'reporting_surface'
  | 'document_service'
  | 'learning_surface';

export type LaunchMethod = 'native' | 'embed' | 'sso' | 'redirect' | 'none';

export type AvailabilityState =
  | 'available'
  | 'restricted'
  | 'pending'
  | 'onboarding_required'
  | 'billing_hold'
  | 'compliance_hold'
  | 'inactive'
  | 'maintenance';

export type ReasonCode =
  | 'ENTITLEMENT_MISSING'
  | 'BILLING_HOLD'
  | 'ONBOARDING_INCOMPLETE'
  | 'ROLE_NOT_ALLOWED'
  | 'MAINTENANCE';

export type RemediationType =
  | 'upgrade_plan'
  | 'resolve_billing'
  | 'continue_onboarding'
  | 'contact_support'
  | 'none';

export interface Remediation {
  type: RemediationType;
  route: string;
}

export interface LaunchConfig {
  method: LaunchMethod;
  route?: string;
  target_url?: string;
}

export interface LaunchableObject {
  object_type: ObjectType;
  key: string;
  name: string;
  availability: AvailabilityState;
  launch: LaunchConfig;
  reason_codes: ReasonCode[];
  remediation: Remediation | null;
}
