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
 * Represents the metadata for an external repository as defined in repos.manifest.json.
 * This is the single source of truth for repository structure across the application.
 */
export interface ExternalRepository {
  /**
   * The display name of the repository (e.g., 'Dolibarr', 'Metabase').
   */
  name: string;

  /**
   * A unique key for the repository (e.g., 'dolibarr', 'metabase').
   */
  key: string;

  /**
   * The URL pointing to the external repository.
   * Can be empty if the repository is already available locally (e.g. in the active bench).
   */
  url: string;

  /**
   * The relationship type of this repository to the main project.
   */
  type: RepositoryType;

  /**
   * A brief description of the repository's functional purpose.
   */
  purpose: string;

  /**
   * Additional implementation notes or context regarding this repository.
   */
  notes: string;
}
