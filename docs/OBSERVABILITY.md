# Observability and Logging Guide

This document outlines the standards for logging, health checks, and error monitoring. The goal is to create a baseline level of observability to help diagnose runtime issues without requiring guesswork.

## 1. Structured Logging

To ensure logs are consistent and machine-parsable, all server-side logging should be done through the `Logger` utility found at `src/lib/logger.ts`.

### Usage

```typescript
import { Logger } from '@/lib/logger';

Logger.info('auth', 'User successfully authenticated', { userId: '123' });
Logger.error('integrations', 'Failed to fetch data from Odoo', { error: e });
```

### Log Categories

All log entries must be assigned a category. This allows for filtering and routing logs based on their origin.

-   `auth`: User authentication, session management, and permission checks.
-   `launch`: Module launch requests, readiness checks, and execution.
-   `integrations`: Communication with any external service (e.g., Frappe, Odoo, Metabase).
-   `runtime`: Application startup, configuration loading, and environment checks.
-   `support`: Support ticket creation or other user-facing support workflows.
-   `validation`: Events related to the end-to-end validation flow.
-   `health`: Logs generated from health-check endpoints.

## 2. Health Checks

Health-check endpoints provide a simple way to monitor the status of the application and its critical dependencies.

-   **`GET /api/health/app`**: Checks the basic health of the Next.js server. It should return a `200 OK` if the server is running.

-   **`GET /api/health/integrations`**: Checks the mocked status of key external integrations. This endpoint simulates checking the `health_status` field that would be maintained by the backend.

## 3. Error Tracking

While a full external error monitoring service (like Sentry or Datadog) is not yet implemented, the logging utility provides a clean integration point for it.

The `Logger.error()` method automatically calls a placeholder function: `reportErrorToExternalService`. To enable error tracking, this function (located in `src/lib/logger.ts`) should be implemented to send the error and context to the desired service.

## 4. Debugging Flow

When diagnosing an issue, follow these steps:

1.  **Browser Console:** Check the browser's developer console for any client-side errors.
2.  **Application Logs:** Check the server logs for structured output from the Next.js application. Filter by category to narrow down the issue.
3.  **Health Checks:** Query the health-check endpoints to see if the application or its integrations are reporting issues.
4.  **External Service Logs:** If an integration is marked as unhealthy, check the logs of that specific external service.
