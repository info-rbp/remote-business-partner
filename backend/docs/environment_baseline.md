# Environment Baseline

This document defines the environment strategy for the Remote Business Partner platform.

## 1. Environment Tiers

The platform uses a standard three-tier environment model. Each environment is isolated and serves a specific purpose.

### a. Local/Development (`local/dev`)

*   **Purpose:** For active development, experimentation, and running local tests. This is the primary environment for developers and AI agents.
*   **Components:**
    *   Local Next.js development server (managed by Firebase Studio).
    *   Local Frappe bench (`rbp-bench/rbp-bench`).
    *   Local database and services (e.g., Redis).
*   **Data:** Uses mock data, sanitized subsets of staging data, or ephemeral data.
*   **Secrets:** Uses local-only, non-production secrets (e.g., from a `.env.local` file). Credentials must never be shared with other environments.

### b. Staging (`staging`)

*   **Purpose:** For pre-production testing, quality assurance, and integration validation. It should be a close mirror of the production environment.
*   **Components:**
    *   Deployed Next.js application on a staging-specific host.
    *   Staging Frappe backend.
    *   Dedicated staging database and services.
*   **Data:** Uses anonymized or representative data that mimics production workloads.
*   **Secrets:** Uses staging-specific secrets, managed through a dedicated secrets manager. Must not be shared with production.

### c. Production (`production`)

*   **Purpose:** The live environment serving end-users. It is the single source of truth for all business operations.
*   **Components:**
    *   Deployed Next.js application on the production host.
    *   Production Frappe backend.
    *   Production database and services with high availability and backups.
*   **Data:** Live, real-world user and business data.
*   **Secrets:** Uses production-only secrets, with strict access controls and rotation policies.

## 2. Environment Promotion and Data Flow

*   **Code:** Code flows from `local/dev` -> `staging` -> `production`. All code must be reviewed and pass automated tests before being promoted.
*   **Data:** Data **must never** flow from a higher environment to a lower one. Production data must not be used in staging or local environments.

## 3. What Must Never Be Shared Between Environments

*   **Secrets:** API keys, database credentials, and other secrets are strictly environment-specific.
*   **Databases:** Each environment must have its own isolated database.
*   **Service Endpoints:** Backend and third-party service URLs should be configured per environment.
*   **User Accounts:** User accounts and sessions should be distinct for each environment.
