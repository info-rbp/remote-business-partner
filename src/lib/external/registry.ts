import { repositoryMetadata } from '../../../integrations/repo-manifest/repository-metadata';
import type {
  ExternalRepository,
  IntegrationType,
  RuntimeClassification
} from './types';

// ============================================================================
// Guardrails & Validation
// ============================================================================

// Fail-fast sanity check: Ensure the registry loaded correctly and is not empty.
if (!repositoryMetadata || Object.keys(repositoryMetadata).length === 0) {
  console.warn('Warning: External repository metadata registry is empty or failed to load.');
}

// ============================================================================
// Application-Facing Access API
// ============================================================================

/**
 * Retrieves all external repositories from the enriched metadata registry.
 */
export function getAllExternalRepositories(): ExternalRepository[] {
  return Object.values(repositoryMetadata);
}

/**
 * Safely retrieves a specific external repository by its unique key.
 * 
 * @param key The unique string identifier of the repository (e.g., 'metabase').
 * @returns The ExternalRepository if found, or undefined if missing.
 */
export function getExternalRepositoryByKey(key: string): ExternalRepository | undefined {
  return repositoryMetadata[key];
}

/**
 * Retrieves a specific external repository by its unique key, throwing an error if missing.
 * Use this only when application logic depends on a critical repository existing, 
 * ensuring we don't fail silently.
 */
export function getExternalRepositoryByKeyOrThrow(key: string): ExternalRepository {
  const repo = repositoryMetadata[key];
  if (!repo) {
    throw new Error(`Critical invariant failed: External repository with key '${key}' not found in the ecosystem registry.`);
  }
  return repo;
}

/**
 * Retrieves all repositories matching a specific integration type.
 */
export function getRepositoriesByIntegrationType(type: IntegrationType): ExternalRepository[] {
  return getAllExternalRepositories().filter(repo => repo.integrationType === type);
}

/**
 * Retrieves all repositories matching a specific runtime classification.
 */
export function getRepositoriesByRuntimeClassification(classification: RuntimeClassification): ExternalRepository[] {
  return getAllExternalRepositories().filter(repo => repo.runtimeClassification === classification);
}

/**
 * Retrieves all repositories that can be launched or embedded within the application.
 * This safely excludes repositories with a 'none' launch classification.
 */
export function getLaunchableRepositories(): ExternalRepository[] {
  return getAllExternalRepositories().filter(repo => repo.launchClassification !== 'none');
}

/**
 * Retrieves all repositories flagged for surface visibility in the UI.
 * Use this to populate user-facing navigations, grids, and dashboards.
 */
export function getVisibleRepositories(): ExternalRepository[] {
  return getAllExternalRepositories().filter(repo => repo.surfaceVisibility === 'visible');
}

/**
 * Retrieves all active repositories in the ecosystem, filtering out 'planned' or 'deprecated' systems.
 */
export function getActiveRepositories(): ExternalRepository[] {
  return getAllExternalRepositories().filter(repo => repo.status === 'active');
}
