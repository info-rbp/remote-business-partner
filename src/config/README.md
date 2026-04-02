# Configuration Management

This directory contains the logic for managing all environment-based configuration for the platform.

## Core Principles

1.  **Single Source of Truth:** The environment (`.env` file) is the only source of configuration values.
2.  **Centralized Access:** All application code MUST access configuration through the unified `config` object exported from `src/config/index.ts`.
3.  **Strict Validation:** The application will fail at startup if any required environment variables are missing or invalid. This is enforced by a `Zod` schema in `src/config/schema.ts`.
4.  **Clear Separation:** Environment variables are strictly separated into two categories:
    *   **Server-Side (`config.server`):** Secrets, API keys, and connection strings. These are **never** exposed to the browser.
    *   **Client-Side (`config.client`):** Public URLs, feature flags, and other non-sensitive values. These MUST be prefixed with `NEXT_PUBLIC_` to be included in the browser bundle.

## Usage

### Accessing Configuration

```typescript
import { config } from '@/config';

// In a server-side file (e.g., an API route or Server Component)
const apiKey = config.server.INTEGRATION_AUTHENTIK_API_TOKEN;

// In a client-side file (e.g., a React component)
const appUrl = config.client.NEXT_PUBLIC_APP_URL;
```

### Adding a New Variable

1.  **Add to `.env.example`:** Document the new variable with a clear description.
2.  **Add to `src/config/schema.ts`:**
    *   If it's a backend-only secret, add it to `serverSchema`.
    *   If it needs to be available in the browser, prefix the name with `NEXT_PUBLIC_` and add it to `clientSchema`.
3.  **Use it:** Import the `config` object and access your new variable via `config.server.YOUR_VAR` or `config.client.YOUR_VAR`.

This system ensures that configuration is managed in a secure, consistent, and maintainable way.
