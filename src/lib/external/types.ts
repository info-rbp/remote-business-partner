
/**
 * @file Defines the core data structures for external repository integration metadata.
 * @author Gemini
 * @date 2024-07-15
 */

/**
 * Defines the type of integration for an external repository.
 *
 * - `reference_only`: The repository is used for informational purposes only. No code is integrated.
 * - `service_api`: The repository exposes a service that the application consumes via an API.
 * - `embedded_module`: The repository contains a module that is embedded within the application.
 * - `sso_target`: The repository represents an application that is a target for single sign-on.
 * - `runtime_adjacent`: The repository is a critical part of the runtime, but not directly integrated into the codebase.
 */
export type IntegrationType =
  | 'reference_only'
  | 'service_api'
  | 'embedded_module'
  | 'sso_target'
  | 'runtime_adjacent';

/**
 * Defines how an external repository is launched or accessed from the application.
 *
 * - `none`: The repository is not directly launchable from the application.
 * - `native`: The repository is a native part of the application.
 * - `embed`: The repository is embedded within the application (e.g., in an iframe).
 * - `sso`: The repository is accessed via single sign-on.
 * - `redirect`: The application redirects the user to the external repository.
 */
export type LaunchType = 'none' | 'native' | 'embed' | 'sso' | 'redirect';

/**
 * Defines the runtime classification of an external repository.
 *
 * - `runtime_critical`: The application cannot function without this repository.
 * - `feature_dependent`: A specific feature of the application depends on this repository.
 * - `non_critical`: The application can function without this repository.
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
 * Represents the metadata for an external repository.
 */
export interface ExternalRepository {
  /**
   * A unique key for the repository (e.g., 'dolibarr', 'metabase').
   */
  key: string;

  /**
   * The display name of the repository (e.g., 'Dolibarr', 'Metabase').
   */
  name: string;

  /**
   * A brief description of the repository's purpose.
   */
  purpose: string;

  /**
   * The type of integration.
   */
  integrationType: IntegrationType;

  /**
   * The runtime classification.
   */
  runtimeClassification: RuntimeClassification;

  /**
   * The launch classification.
   */
  launchClassification: LaunchType;

  /**
   * The visibility of the repository in the UI.
   */
  surfaceVisibility: SurfaceVisibility;

  /**
   * The current status of the integration.
   */
  status: 'active' | 'deprecated' | 'planned';
}
