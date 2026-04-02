import type { ExternalRepository } from '@/lib/external/types';
import manifestData from './repos.manifest.json';

// --- Enriched Data Overrides ---
// We map the raw inventory from repos.manifest.json and enrich it
// with governance-specific classifications needed by the application runtime.
const governanceEnrichments: Record<string, Pick<ExternalRepository, 'integrationType' | 'runtimeClassification' | 'launchClassification' | 'surfaceVisibility' | 'status'>> = {
  'dolibarr': {
    integrationType: 'reference_only',
    runtimeClassification: 'non_critical',
    launchClassification: 'none',
    surfaceVisibility: 'hidden',
    status: 'active',
  },
  'frappe': {
    integrationType: 'runtime_adjacent',
    runtimeClassification: 'runtime_critical',
    launchClassification: 'native',
    surfaceVisibility: 'hidden',
    status: 'active',
  },
  'metabase': {
    integrationType: 'service_api',
    runtimeClassification: 'feature_dependent',
    launchClassification: 'embed',
    surfaceVisibility: 'hidden',
    status: 'active',
  },
  'rbp_core': {
    integrationType: 'embedded_module',
    runtimeClassification: 'runtime_critical',
    launchClassification: 'native',
    surfaceVisibility: 'hidden',
    status: 'active',
  },
  'odoo': {
    integrationType: 'service_api', // TODO: Verify if this should be reference_only or service_api based on current implementation scope.
    runtimeClassification: 'feature_dependent',
    launchClassification: 'none',
    surfaceVisibility: 'hidden',
    status: 'active',
  },
  'authentik': {
    integrationType: 'sso_target',
    runtimeClassification: 'runtime_critical',
    launchClassification: 'sso',
    surfaceVisibility: 'hidden',
    status: 'active',
  },
  'n8n': {
    integrationType: 'service_api',
    runtimeClassification: 'feature_dependent',
    launchClassification: 'none',
    surfaceVisibility: 'hidden',
    status: 'active',
  },
  'appsmith': {
    integrationType: 'reference_only', // Reference until integrated explicitly
    runtimeClassification: 'non_critical',
    launchClassification: 'none',
    surfaceVisibility: 'hidden',
    status: 'planned',
  },
  'ballerine': {
    integrationType: 'service_api',
    runtimeClassification: 'feature_dependent',
    launchClassification: 'embed',
    surfaceVisibility: 'hidden',
    status: 'active',
  },
  'easy_appointments': {
    integrationType: 'service_api',
    runtimeClassification: 'feature_dependent',
    launchClassification: 'embed',
    surfaceVisibility: 'visible',
    status: 'active',
  },
  'openbb': {
    integrationType: 'service_api',
    runtimeClassification: 'feature_dependent',
    launchClassification: 'embed',
    surfaceVisibility: 'visible',
    status: 'planned',
  },
  'marble': {
    integrationType: 'service_api',
    runtimeClassification: 'feature_dependent',
    launchClassification: 'none',
    surfaceVisibility: 'hidden',
    status: 'planned',
  },
  'hi_events': {
    integrationType: 'service_api',
    runtimeClassification: 'feature_dependent',
    launchClassification: 'embed',
    surfaceVisibility: 'visible',
    status: 'planned',
  },
  'docspell': {
    integrationType: 'service_api',
    runtimeClassification: 'feature_dependent',
    launchClassification: 'none', // Assuming background processing
    surfaceVisibility: 'hidden',
    status: 'planned',
  },
  'fleetbase': {
    integrationType: 'service_api',
    runtimeClassification: 'feature_dependent',
    launchClassification: 'none',
    surfaceVisibility: 'hidden',
    status: 'planned',
  },
  'financial_freedom': {
    integrationType: 'reference_only',
    runtimeClassification: 'non_critical',
    launchClassification: 'redirect',
    surfaceVisibility: 'visible',
    status: 'planned',
  },
  'tirreno': {
    integrationType: 'reference_only',
    runtimeClassification: 'non_critical',
    launchClassification: 'none',
    surfaceVisibility: 'hidden',
    status: 'planned',
  },
  'chaskiq': {
    integrationType: 'embedded_module',
    runtimeClassification: 'feature_dependent',
    launchClassification: 'embed',
    surfaceVisibility: 'visible', // Usually a floating chat widget
    status: 'active',
  },
  'kyc_check': {
    integrationType: 'reference_only',
    runtimeClassification: 'non_critical',
    launchClassification: 'none',
    surfaceVisibility: 'hidden',
    status: 'planned',
  },
  'nexus': {
    integrationType: 'reference_only',
    runtimeClassification: 'non_critical',
    launchClassification: 'none',
    surfaceVisibility: 'hidden',
    status: 'active',
  },
  'ghostfolio': {
    integrationType: 'reference_only',
    runtimeClassification: 'non_critical',
    launchClassification: 'none',
    surfaceVisibility: 'hidden',
    status: 'planned',
  },
  'apache_fineract': {
    integrationType: 'reference_only',
    runtimeClassification: 'non_critical',
    launchClassification: 'none',
    surfaceVisibility: 'hidden',
    status: 'planned',
  },
  'horilla': {
    integrationType: 'reference_only',
    runtimeClassification: 'non_critical',
    launchClassification: 'none',
    surfaceVisibility: 'hidden',
    status: 'planned',
  },
  'postiz': {
    integrationType: 'reference_only',
    runtimeClassification: 'non_critical',
    launchClassification: 'none',
    surfaceVisibility: 'hidden',
    status: 'planned',
  },
  'openproject': {
    integrationType: 'reference_only',
    runtimeClassification: 'non_critical',
    launchClassification: 'none',
    surfaceVisibility: 'hidden',
    status: 'planned',
  }
};

/**
 * A registry of all external repositories that the platform is aware of.
 * This metadata provides a typed, deterministic source for understanding the role
 * and classification of each component in the ecosystem.
 *
 * It combines the inventory list from repos.manifest.json with the enriched
 * governance fields declared above.
 */
export const repositoryMetadata: Record<string, ExternalRepository> = manifestData.repositories.reduce(
  (acc: Record<string, ExternalRepository>, repo: any) => {
    
    // Apply enrichment or fallback to default
    // Using a type assertion on the key to verify it matches our enrichment map if it were stricter.
    const enrichment = governanceEnrichments[repo.key] || {
      // Emergency fallback if a new repo is added to manifest but not here
      integrationType: 'reference_only',
      runtimeClassification: 'non_critical',
      launchClassification: 'none',
      surfaceVisibility: 'hidden',
      status: 'planned',
    };

    acc[repo.key] = {
      name: repo.name,
      key: repo.key,
      url: repo.url || '',
      type: repo.type as ExternalRepository['type'],
      purpose: repo.purpose,
      notes: repo.notes,
      ...enrichment
    };
    return acc;
  },
  {}
);
