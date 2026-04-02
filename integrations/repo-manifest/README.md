# Repository Manifest and Metadata Registry

This directory contains the authoritative inventory and governance metadata for all external repositories that integrate with or support the Remote Business Partner platform.

## Architecture & Responsibilities

This system maintains a strict separation of concerns between raw inventory and application-level governance logic:

### 1. `repos.manifest.json` (The Inventory)
**Role:** The lightweight, pure-data source of truth for tracking external repositories.
**Purpose:** 
- Provides a simple array of all repositories (name, key, url, type, purpose, notes).
- Acts as the baseline inventory that tooling, scripts, or non-TypeScript environments can easily parse without needing to understand complex platform governance rules.
- Contains NO runtime classification logic.

### 2. `repository-metadata.ts` (The Enriched Registry)
**Role:** The authoritative, enriched metadata registry used by the application runtime.
**Purpose:** 
- Imports the raw inventory from the manifest.
- Enriches each repository entry with critical governance classifications (e.g., `integrationType`, `runtimeClassification`, `launchClassification`, `surfaceVisibility`, `status`).
- This file is the single source of truth for the application's TypeScript code. When the application needs to know *how* to interact with a repository (e.g., "Is it critical?", "Can it be embedded?"), it queries this registry.

### 3. `src/lib/external/types.ts` (The Contract)
**Role:** Defines the canonical, strongly-typed data structures.
**Purpose:**
- Ensures the `ExternalRepository` interface strictly enforces both the manifest inventory fields and the enriched governance fields via strict string literal unions.

## Why the Richer Governance Model?

A simple manifest is insufficient for complex enterprise platforms. The application needs to dynamically adjust its behavior based on repository constraints. For example:
- **`runtimeClassification`**: Determines if the app should hard-fail if a service is down (e.g. `runtime_critical` vs `feature_dependent`).
- **`launchClassification`**: Dictates the UI rendering strategy (e.g. `embed` triggers an iframe, `sso` initiates an auth flow).
- **`surfaceVisibility`**: Controls whether a repository is exposed to users in navigation or admin panels.

By splitting the pure list (`repos.manifest.json`) from the governance rules (`repository-metadata.ts`), we achieve a clean architecture that is easy to maintain but powerful enough for complex runtime logic.
