import { LaunchableObject, EcosystemCapability } from './types';
import { AccountState } from './state';
import { ROUTES } from '@/routes';
import { getEcosystemCapabilities } from './ecosystem';

/**
 * Enriches an EcosystemCapability with mock runtime data to create a LaunchableObject.
 * In a real application, this enrichment would happen on the backend based on
 * the user's entitlements, account state, etc.
 */
function enrichCapability(capability: EcosystemCapability): LaunchableObject {
  // Mock logic to determine the availability state
  let availability: AccountState = AccountState.Active;
  if (capability.repositoryKey === 'finance') {
    availability = AccountState.Restricted;
  } else if (capability.repositoryKey === 'insights') {
    availability = AccountState.Onboarding;
  } else if (capability.repositoryKey === 'sales-dashboard') {
    availability = AccountState.BillingHold;
  } else if (capability.treatmentType === 'integration_pending') {
      availability = AccountState.Restricted;
  }

  return {
    object_type: capability.implementationType === 'react_component' ? 'platform_module' : 'external_service',
    key: capability.repositoryKey,
    name: capability.manifest.name,
    description: capability.manifest.purpose,
    availability,
    launch: {
      method: capability.expectedLaunchPattern,
      // Here we could dynamically determine the route or URL
      route: capability.expectedLaunchPattern === 'native' ? `/app/modules/${capability.repositoryKey}` : undefined,
      target_url: capability.expectedLaunchPattern === 'redirect' || capability.expectedLaunchPattern === 'sso' ? capability.manifest.url : undefined,
    },
    reason_codes: [], // This would be determined by the backend
    remediation: null, // This would also be backend-driven
    ecosystem: capability,
  };
}

// Generate the mock launch data by enriching the capabilities from the manifest
export const mockLaunchData: LaunchableObject[] = getEcosystemCapabilities().map(enrichCapability);
