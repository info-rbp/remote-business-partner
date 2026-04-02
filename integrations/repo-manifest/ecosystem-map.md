# Platform Ecosystem Map

This document provides a visual map of the entire platform ecosystem, categorized by the `integrationType` defined in `repository-metadata.ts`.

## 1. Core Components

These are the fundamental pillars of the platform, providing the primary user interface and the backend system of record.

-   **Remote Business Partner (UI)** (`remote-business-partner`): The primary Next.js-based user interface for the platform.
-   **Frappe Bench for Big Apps** (`frappe-bench-for-big-apps`): The core Frappe backend and ERPNext runtime.
-   **ERPNext** (`erpnext`): The foundational ERP application providing core business logic.

## 2. Deployment Utilities

These repositories provide the tools and configurations necessary to deploy and manage the platform.

-   **Frappe Docker** (`frappe_docker`): Official Docker images and orchestration for the Frappe environment.

## 3. Connectors

Connectors are responsible for data synchronization and bridging communication between the core platform and external services.

-   **Odoo-Frappe Connector** (`odoo-frappe-connector`): Synchronizes data between Frappe/ERPNext and Odoo.
-   **Authentik Integration** (`frappe-external-authentik`): Provides Authentik-based OpenID Connect authentication.
-   **Metabase Frappe Driver** (`metabase-frappe-driver`): Enables Metabase to connect to the Frappe database.
-   **BigQuery Connector** (`frappe-bigquery-connector`): Exports Frappe data to Google BigQuery.

## 4. Adapters & Extensions

These components enhance the functionality of the core Frappe platform, often by improving the user interface or adding specific features.

-   **Gantt Chart (GoFlow)** (`erpnext_gantt_goflow`): An extension for advanced Gantt chart functionalities.
-   **Better List View** (`frappe-better-list-view`): A UI extension that enhances Frappe's default list views.
