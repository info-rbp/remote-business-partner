/**
 * @file Defines the core data structures for external repository integration metadata.
 */

/**
 * Defines the nature of the repository relationship based on repos.manifest.json
 */
export type RepositoryType =
  | 'reference'
  | 'submodule-candidate'
  | 'available-in-bench';

/**
 * Defines the type of integration for an external repository.
 */
export type IntegrationType =
  | 'reference_only'
  | 'service_api'
  | 'embedded_module'
  | 'sso_target'
  | 'runtime_adjacent';

/**
 * Defines how an external repository is launched or accessed from the application.
 */
export type LaunchType = 'none' | 'native' | 'embed' | 'sso' | 'redirect';

/**
 * Defines the runtime classification of an external repository.
 */
export type RuntimeClassification =
  | 'runtime_critical'
  | 'feature_dependent'
  | 'non_critical';

/**
 * Defines the visibility of an external repository in the application UI.
 */
export type SurfaceVisibility = 'visible' | 'hidden';

/**
 * Represents the lifecycle status of the external repository.
 */
export type Status = 'active' | 'deprecated' | 'planned';

/**
 * Represents the enriched metadata for an external repository.
 * This is the single authoritative source of truth for governance across the application,
 * combining the raw manifest inventory with enriched runtime classifications.
 */
export interface ExternalRepository {
  // Inventory Fields (from repos.manifest.json)
  name: string;
  key: string;
  url: string;
  type: RepositoryType;
  purpose: string;
  notes: string;

  // Governance Fields (enriched in repository-metadata.ts)
  integrationType: IntegrationType;
  runtimeClassification: RuntimeClassification;
  launchClassification: LaunchType;
  surfaceVisibility: SurfaceVisibility;
  status: Status;
}
