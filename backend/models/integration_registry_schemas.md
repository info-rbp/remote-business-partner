# Integration Registry: Proposed Schemas

This document provides a draft of the schemas for the backend integration registry. These are intended as a starting point for the Frappe DocType implementation.

## 1. External Service

**DocType:** `External Service`
**Description:** Represents a third-party service that the platform integrates with.

| Field Name | Type | Description |
| :--- | :--- | :--- |
| `service_name` | Data | The name of the service (e.g., "Stripe"). |
| `service_type` | Select | The type of service (e.g., "Payment Gateway", "Email Service"). |
| `api_key` | Password | The API key for the service. |
| `api_secret` | Password | The API secret for the service. |
| `endpoint_url` | Data | The base URL for the service's API. |
| `status` | Select | The status of the service ("Active", "Inactive"). |

## 2. Repository Reference

**DocType:** `Repository Reference`
**Description:** A reference to a source code repository in the ecosystem.

| Field Name | Type | Description |
| :--- | :--- | :--- |
| `repository_key` | Data | The unique key from the ecosystem map. |
| `repository_name` | Data | The human-readable name of the repository. |
| `repository_url` | Data | The URL of the repository. |
| `type` | Select | The type of repository ("reference", "submodule-candidate"). |
| `module_family` | Data | The module family the repository belongs to. |

## 3. Launch Configuration

**DocType:** `Launch Configuration`
**Description:** The configuration for launching a specific application or service.

| Field Name | Type | Description |
| :--- | :--- | :--- |
| `launch_key` | Data | A unique identifier for the launch configuration. |
| `display_name` | Data | The name of the launchable item as it appears in the UI. |
| `description` | Text | A description of the launchable item. |
| `launch_pattern` | Select | The launch pattern ("New Tab", "Embedded", "API-Only"). |
| `launch_url` | Data | The URL to launch (if applicable). |
| `repository_reference` | Link | A link to a Repository Reference record. |
| `required_entitlements` | Table | A list of entitlements required to launch. |

## 4. Integration Connection

**DocType:** `Integration Connection`
**Description:** The live connection and configuration that bridges a module to an external service or another module.

| Field Name | Type | Description |
| :--- | :--- | :--- |
| `connection_name` | Data | A descriptive name for the connection. |
| `source_module` | Link | A link to the source module. |
| `target_service` | Link | A link to an External Service record. |
| `target_module` | Link | A link to another module. |
| `configuration_data` | Code | A JSON blob for connection-specific settings. |
| `status` | Select | The status of the connection ("Enabled", "Disabled"). |

## 5. Sync Metadata

**DocType:** `Sync Metadata`
**Description:** Metadata about the synchronization of data between the platform and external systems.

| Field Name | Type | Description |
| :--- | :--- | :--- |
| `sync_key` | Data | A unique key for the synchronization task. |
| `source` | Data | The source of the data. |
| `destination` | Data | The destination of the data. |
| `last_sync_timestamp` | Datetime | The timestamp of the last successful sync. |
| `sync_status` | Select | The status of the last sync ("Success", "Failed"). |
| `sync_log` | Text | A log of synchronization events. |
