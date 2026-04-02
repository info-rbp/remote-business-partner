# Repository Manifest & Metadata

This directory contains the tools and definitions for managing the platform's awareness of its component ecosystem.

## 1. Core Philosophy

-   **Manifest for Awareness:** The `repos.manifest.json` file is a simple list of all repositories that are part of the platform ecosystem. It is used to give the platform *awareness* of its components.
-   **Metadata for Governance:** The `repository-metadata.ts` file provides strongly-typed, deterministic metadata about each repository. This is the **governed source of truth** for how the platform understands and classifies each component.
-   **Frappe as Runtime Truth:** Neither the manifest nor this metadata layer replaces the Frappe backend as the ultimate runtime system of record. This layer is for platform-level orchestration and visibility, not for business logic.

## 2. Metadata Ownership and Governance

**Owner:** Platform Engineering Team

Adding or modifying a repository in the ecosystem is a governed process. It ensures that every component is explicitly classified and understood before it is integrated.

### How to Add a New Repository

1.  **Add to Manifest:** Add the canonical repository key (e.g., `new-repo-name`) to the `repos.manifest.json` file.
2.  **Add to Metadata:** Create a new entry in `repository-metadata.ts` for the new repository. You must provide all the required fields as defined by the `ExternalRepository` type.
    -   `canonicalKey`: Must match the key in the manifest.
    -   `displayName`: A human-readable name.
    -   `purpose`: A clear, concise description of the repository's role.
    -   `integrationType`, `runtimeClassification`, `launchClassification`, `surfaceVisibility`: Select the appropriate classifications from the `src/lib/external/types.ts` enums.
    -   `status`: Set the initial status (e.g., `active`, `beta`).
3.  **Update Ecosystem Map:** Add the new repository to the appropriate section in `ecosystem-map.md`.
4.  **Submit Pull Request:** Submit a pull request with these changes. The Platform Engineering team will review the classifications for consistency and architectural alignment before merging.

**Self-service additions are not permitted.** This governance is in place to maintain architectural integrity and prevent classification drift.
