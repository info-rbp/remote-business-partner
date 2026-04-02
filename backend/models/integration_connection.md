# Integration Connection Model

This document defines the backend model for an **Integration Connection**. This record represents the live, runtime configuration for connecting to a specific external service (e.g., a payment gateway, a CRM). It is the single source of truth for the platform's interaction with third-party APIs and services.

## Manifest Awareness vs. Runtime Configuration

A key principle of the platform is the separation of ecosystem awareness from runtime configuration.

-   **Manifest (`integrations/repo-manifest/ecosystem-map.json`)**: This file acts as a high-level, informational map of potential integrations. It is a **planning tool** used for discovery and to understand the broader ecosystem. It is **NOT** a runtime dependency. The platform should be able to start and run without the manifest being present.

-   **Integration Connection Record**: This is the **runtime truth**. It is a database record (a Frappe DocType) that holds the concrete credentials, endpoints, and configuration necessary to actively connect to an external service. It turns a "planned" integration from the manifest into a "live" one.

## Integration Connection Model Definition

An Integration Connection record contains all the necessary information to manage the lifecycle of a connection to an external service.

| Field Name                  | Type                   | Description                                                                                                                              |
| :-------------------------- | :--------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| `connection_id`             | Unique ID              | The primary key for the connection record.                                                                                               |
| `service_reference`         | Link                   | A mandatory link to an `External Service Reference` record. This provides the core **service metadata** (service name, type, API docs).      |
| `authentication_strategy`   | Select                 | The authentication method required by the service. Options: `oauth2`, `api_key`, `jwt`, `custom`.                                         |
| `credentials`               | Encrypted Text         | A secure, encrypted field to store sensitive information like API keys, client secrets, or refresh tokens.                               |
| `environment_configuration` | JSON                   | Stores environment-specific settings, such as different API endpoints for `development`, `staging`, and `production`.                        |
| `status`                    | Select                 | The administrative status of the integration. Options: `enabled`, `disabled`. This allows an admin to manually turn an integration on or off. |
| `health_check_endpoint`     | URL (Optional)         | An optional endpoint that the platform can poll to verify the health of the connection.                                                  |
| `last_health_check`         | Datetime               | A timestamp of the last time the health check was performed.                                                                             |
| `health_status`             | Select                 | The operational health of the connection. Options: `healthy`, `degraded`, `unhealthy`, `unknown`.                                        |

---

## Field Details

### `environment_configuration`

This JSON field allows for flexible configuration across different deployment environments.

*Example:*
```json
{
  "development": {
    "api_base_url": "https://api.sandbox.service.com/v1"
  },
  "production": {
    "api_base_url": "https://api.service.com/v1"
  }
}
```

### `health_status`

The health status is updated automatically by a background worker that periodically polls the `health_check_endpoint`.

-   `healthy`: The last health check returned a successful response.
-   `degraded`: The last health check returned a slow response or a non-critical error.
-   `unhealthy`: The last health check failed, indicating a critical issue with the integration.
-   `unknown`: No health check endpoint is defined, or no check has been performed yet.

## Relationship to Modules and Launch

The Integration Connection model is a foundational component for the platform's module and launch systems.

-   **Relation to Modules**:
    -   A **Platform Module** in the `module_registry` can declare a dependency on one or more Integration Connections. For example, the `Finance` module would link to the `Stripe` and `QuickBooks` connection records.
    -   This relationship makes it explicit what external services a module requires to function.

-   **Relation to Launch**:
    -   The **Launch Configuration Engine** uses the Integration Connection's status and health as critical inputs for its readiness checks.
    -   Before launching a module (e.g., `Finance`), the engine will:
        1.  Check the module's dependencies in the registry.
        2.  Retrieve the corresponding `Integration Connection` record(s) (e.g., for Stripe).
        3.  Verify that the `status` is `enabled`.
        4.  Verify that the `health_status` is `healthy`.
    -   If the connection is disabled or unhealthy, the launch will be blocked, and the user will be presented with a clear reason (e.g., "The connection to our payment provider is temporarily unavailable. Please try again later."). This prevents users from accessing modules that are in a non-operational state.
