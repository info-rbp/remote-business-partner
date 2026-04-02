# Environment and Configuration Management

This directory contains the logic for managing application configuration and environment variables.

## Architecture

The configuration strategy is designed to be predictable, secure, and easy to manage across all environments (development, staging, production).

1.  **Single Source of Truth**: The `.env.local` file (which is git-ignored) is the primary source for all environment-specific values. It is based on the `.env.example` template.
2.  **Validation on Startup**: The `src/config/index.ts` module uses a Zod schema (`src/config/schema.ts`) to validate all environment variables when the application starts. If any required variable is missing or has an invalid type, the server will fail to start, preventing runtime errors.
3.  **Frontend vs. Backend Split**: The schema explicitly separates server-side and client-side variables.
    -   **Server-side**: Variables are only available in the Node.js environment.
    -   **Client-side**: Variables intended for the browser **MUST** be prefixed with `NEXT_PUBLIC_`. The configuration loader exposes these through a `public` object, making it clear what is safe for frontend use.
4.  **Centralized Access**: All parts of the application **MUST** access configuration through the module exported from `src/config/index.ts`. Do not use `process.env` directly outside of this module.

## Environment Setup

1.  Copy the `.env.example` file to a new file named `.env.local` in the project root.
2.  Fill in the required values in `.env.local` for your specific environment.
3.  This file **MUST NOT** be committed to version control.

## Secret Handling

-   **No Hardcoded Secrets**: Never commit secrets (API keys, passwords, private tokens) directly into the codebase.
-   **Use Environment Variables**: All secrets **MUST** be provided via environment variables.
-   **Restrict Exposure**: Only expose secrets to the parts of the application that strictly need them. For external integrations, this means secrets should only be accessible within the server-side integration clients (`src/lib/integrations/services`).

## Naming Convention

-   `PLATFORM_*`: For core application settings.
-   `INTEGRATION_[SERVICE]_[KEY]`: For external service configurations.
-   `FEATURE_[NAME]_ENABLED`: For feature flags.
-   `NEXT_PUBLIC_*`: The required Next.js prefix for variables exposed to the browser.
