# Integration Communication Layer

This directory contains the governed communication layer for all external service integrations.

## Architecture

The primary goal of this layer is to decouple the main application from the specifics of external service APIs. It provides a consistent, structured, and typed interface for all outbound and inbound communication.

-   **`core/`**: Contains the fundamental building blocks for all integrations, including standard typed contracts for requests, responses, authentication, and errors.
-   **`services/`**: Contains the specific client implementations for each external service. Each service has its own subdirectory.
-   **`webhooks/`**: Contains models and handlers for processing inbound events and webhooks from external services.

## Rules of Engagement

1.  **No Direct Calls**: UI components, pages, or other parts of the application **MUST NOT** make direct `fetch` calls to external service APIs.
2.  **Use This Layer**: All communication with external services **MUST** be routed through a dedicated service client in this directory (e.g., `services/metabase/client.ts`).
3.  **Typed Contracts**: All new integrations **MUST** define typed request and response contracts. Do not use `any`.
4.  **Centralized Authentication**: Authentication logic and secret management for external services **MUST** be handled within this layer, pulling from secure server-side sources. It must not be exposed to the client-side.
5.  **Error Handling**: Service clients **MUST** use the `IntegrationError` class for reporting errors and provide context on retry suitability and idempotency.

## Adding a New Service

1.  Create a new subdirectory under `services/`.
2.  Define service-specific types in `services/<your-service>/types.ts`.
3.  Create a `client.ts` file that encapsulates the logic for communicating with the service API.
4.  Expose the client through `services/<your-service>/index.ts`.
