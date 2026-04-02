# Backend Integration Registry: Planning and Design

This document outlines the design and purpose of the backend integration registry. The registry will be the single source of truth for tracking external services, repository references, launch configurations, and integration metadata.

## Ownership and Location

The integration registry is owned by the **backend runtime**. It will be implemented as a set of DocTypes within the Frappe framework. The data will be stored in the backend database and managed by platform administrators through the admin UI.

The integration/metadata layer can be seen as a consumer of this registry, but not its owner. The manifest is a descriptive tool that informs the registry, but the registry itself is the authoritative source of truth.

## Planned Records

The integration registry will be composed of the following records:

### 1. External Service

*   **What it represents:** A third-party service that the platform integrates with (e.g., a payment gateway, email provider, or external API). This is business truth.
*   **What it does not represent:** A repository or a launchable application.
*   **Core Fields:**
    *   `service_name` (e.g., "Stripe", "SendGrid")
    *   `service_type` (e.g., "Payment Gateway", "Email Service")
    *   `api_key` (encrypted)
    *   `api_secret` (encrypted)
    *   `endpoint_url`
    *   `status` (e.g., "Active", "Inactive")
*   **Relationship to Modules:** Modules can depend on one or more external services.
*   **Relationship to Launch Models:** Not directly related.
*   **Admin Visibility and Configuration:** Admins can create, configure, and manage external services through the admin UI.

### 2. Repository Reference

*   **What it represents:** A reference to a source code repository in the ecosystem. This is ecosystem metadata.
*   **What it does not represent:** A launchable application or a live integration.
*   **Core Fields:**
    *   `repository_key` (from the ecosystem map)
    *   `repository_name`
    *   `repository_url`
    *   `type` (e.g., "reference", "submodule-candidate")
    *   `module_family`
*   **Relationship to Modules:** Modules can be associated with a repository reference.
*   **Relationship to Launch Models:** A launch model can be linked to a repository reference.
*   **Admin Visibility and Configuration:** Admins can view and manage repository references. This data is primarily populated from the ecosystem map.

### 3. Launch Configuration

*   **What it represents:** The configuration for launching a specific application or service. This is launch metadata.
*   **What it does not represent:** The business logic of the application itself.
*   **Core Fields:**
    *   `launch_key` (a unique identifier for the launch configuration)
    *   `display_name`
    *   `description`
    *   `launch_pattern` (e.g., "New Tab", "Embedded", "API-Only")
    *   `launch_url` (if applicable)
    *   `repository_reference` (link to a Repository Reference)
    *   `required_entitlements` (list of entitlements required to launch)
*   **Relationship to Modules:** A module can have one or more launch configurations.
*   **Relationship to Launch Models:** This is the core of the launch model.
*   **Admin Visibility and Configuration:** Admins can create, configure, and manage launch configurations.

### 4. Integration Connection

*   **What it represents:** The live connection and configuration that bridges a module to an external service or another module. This is business truth.
*   **What it does not represent:** A launchable application.
*   **Core Fields:**
    *   `connection_name`
    *   `source_module`
    *   `target_service` (link to an External Service) or `target_module`
    *   `configuration_data` (JSON blob for connection-specific settings)
    *   `status` (e.g., "Enabled", "Disabled")
*   **Relationship to Modules:** This record directly links modules to other services or modules.
*   **Relationship to Launch Models:** Not directly related.
*   **Admin Visibility and Configuration:** Admins can create, configure, and manage integration connections.

### 5. Sync Metadata

*   **What it represents:** Metadata about the synchronization of data between the platform and external systems. This is sync/update metadata.
*   **What it does not represent:** The data being synchronized.
*   **Core Fields:**
    *   `sync_key`
    *   `source`
    *   `destination`
    *   `last_sync_timestamp`
    *   `sync_status` (e.g., "Success", "Failed")
    *   `sync_log`
*   **Relationship to Modules:** Not directly related.
*   **Relationship to Launch Models:** Not directly related.
*   **Admin Visibility and Configuration:** Admins can view sync metadata to monitor the health of data synchronization.
