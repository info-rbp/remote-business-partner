# External Repository Access Layer

This directory (`src/lib/external/`) provides the application-facing contract and access layer for the Remote Business Partner's external repository ecosystem.

## Core Principle

**Application code MUST NOT parse or import `repos.manifest.json` directly.**

The raw manifest is purely an inventory file. It lacks the critical governance classifications (like runtime criticality, visibility rules, and launch methods) required by the platform.

Instead, application logic must rely entirely on the typed API exposed by `src/lib/external/registry.ts`.

## Consuming Metadata in Application Code

The `registry.ts` file acts as the single source of truth for querying repository states. Rather than building custom array filters inside UI components, rely on these provided helpers:

### Example Usage:

```typescript
import { 
  getVisibleRepositories, 
  getExternalRepositoryByKeyOrThrow 
} from '@/lib/external';

// 1. Building UI Navigation/Dashboard Grids
// Correctly isolates only the repositories allowed to be shown to the user.
const dashboardItems = getVisibleRepositories();

dashboardItems.forEach(repo => {
  console.log(`Render Card: ${repo.name} - Launch Mode: ${repo.launchClassification}`);
});


// 2. Establishing Hard System Dependencies
// Fails fast if a critical expected system is not defined in the metadata.
const authConfig = getExternalRepositoryByKeyOrThrow('authentik');
```

### Available Helpers
- `getAllExternalRepositories()`
- `getExternalRepositoryByKey(key)`
- `getExternalRepositoryByKeyOrThrow(key)`
- `getRepositoriesByIntegrationType(type)`
- `getRepositoriesByRuntimeClassification(classification)`
- `getLaunchableRepositories()`
- `getVisibleRepositories()`
- `getActiveRepositories()`

## Why this architecture?

By enforcing querying by classification (e.g. "Get me all embeddable repositories" via `getLaunchableRepositories()`) rather than ad-hoc UI filtering, we ensure that as the ecosystem map changes in Stage 4.1, the UI and API gateways automatically adapt based on governance rules without requiring widespread component refactoring.
