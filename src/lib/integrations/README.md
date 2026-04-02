# Integrations Layer

This directory contains all code related to communicating with external, third-party services.

## Core Principles

1.  **Server-Side Only:** All direct communication with external services MUST happen on the server side (e.g., in API Routes or Server Components). No raw API keys or secrets should ever be exposed to the browser.
2.  **Governed Clients:** Do not use `fetch` directly in application code. All external service communication MUST be encapsulated within a governed client located in `src/lib/integrations/services/{serviceName}/client.ts`.
3.  **Standardized Error Handling:** All clients MUST use the `IntegrationError` class from `core/errors.ts` to wrap any exceptions that occur during a request. This provides a consistent error structure for logging and debugging.
4.  **Typed Contracts:** All client methods and data structures MUST be strongly typed. Avoid the use of `any`.

## The Standardized Request Pattern

To ensure consistency, all service clients should use the centralized `makeRequest` helper function located in `src/lib/integrations/core/request.ts`.

This helper provides:
-   A standard wrapper around `fetch`.
-   Automatic inclusion of authentication headers based on the `ServiceAuth` type.
-   Consistent error wrapping into `IntegrationError` for non-2xx responses and network failures.
-   JSON parsing of the response body.

### Example Client Structure

```typescript
// src/lib/integrations/services/my-service/client.ts
import { makeRequest } from '@/lib/integrations/core/request';
import { IntegrationError } from '@/lib/integrations/core/errors';
import type { ApiTokenAuth } from '@/lib/integrations/core/auth';

export class MyServiceClient {
  private readonly baseUrl: string;
  private readonly auth: ApiTokenAuth;

  constructor(baseUrl: string, token: string) {
    if (!baseUrl || !token) {
      throw new IntegrationError('MyService client is not configured.', { service: 'MyService' });
    }
    this.baseUrl = baseUrl;
    this.auth = { type: 'api-token', token };
  }

  async getSomeData(): Promise<any> {
    return makeRequest(this.baseUrl, this.auth, '/data');
  }
}
```

This pattern ensures that all integrations are robust, maintainable, and easy to reason about.
