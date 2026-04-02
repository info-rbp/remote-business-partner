# Admin Governance Model

This document outlines the governance model for platform administrators. It defines the tools and processes administrators will use to manage the core components of the platform, ensuring that all business logic, access control, and module availability are centrally controlled from the backend.

## 1. Management by Domain

Administrative tasks are grouped by the backend domains they control.

### Module Management

Admins are responsible for the lifecycle and configuration of all `Platform Modules` registered in the system.

-   **Actions**:
    -   **Register New Modules**: Add new modules to the `Module Registry`.
    -   **Enable/Disable Globally**: Use a master switch to make a module available or unavailable to all customers, regardless of their entitlements. This is the primary tool for deploying new modules or retiring old ones.
    -   **Edit Module Metadata**: Update a module's name, description, family, or other non-critical metadata.
    -   **Set Onboarding Requirements**: Flag a module as requiring a `Customer Onboarding Case` before it can be launched.

### Launch Management

Admins control the launch behavior of every module, ensuring stability and clear communication with users.

-   **Actions**:
    -   **Configure Launch Method**: Set the `launch_method` (`native`, `sso`, `embed`, etc.) for a module.
    -   **Set Maintenance Flags**: Place a module into a `maintenance` state, which blocks all launch attempts and displays a clear message to the user.
    -   **Define Remediation Actions**: Configure the messages and actions presented to users when a launch is blocked for a specific reason.

### Entitlement & Subscription Management

Admins manage the commercial aspects of the platform, controlling what customers have access to.

-   **Actions**:
    -   **Create/Edit Subscription Plans**: Define plans, set pricing, and, most importantly, create the base **entitlement set** for each plan by linking `Platform Modules`.
    -   **Grant/Revoke Overrides**: Create `Entitlement` overrides for specific customers to grant or revoke access to modules outside of their plan (e.g., for a trial, a custom deal, or to resolve an issue).
    -   **Manage Account State**: Manually place an account into `compliance_hold` or `suspended` state.

### Integration Management

Admins manage the runtime connections to all external, third-party services.

-   **Actions**:
    -   **Configure Connections**: Create and update `Integration Connection` records with the necessary credentials, endpoints, and authentication strategies.
    -   **Enable/Disable Integrations**: Use the `status` field on an `Integration Connection` to enable or disable it. A disabled integration will cause readiness checks to fail for any dependent module.
    -   **Monitor Health**: View the `health_status` of all integrations to proactively identify and troubleshoot issues with third-party services.

### Visibility & Navigation Management

Admins control the overall structure and navigation of the platform's user-facing surfaces.

-   **Actions**:
    -   **Manage Navigation Rules**: Create, edit, and delete `Navigation Rule` records to control the items that appear in the navigation bars of the `app`, `portal`, and `admin` surfaces.
    -   **Set Visibility Conditions**: Define the required roles or states for a navigation link to be visible, ensuring users only see links to content they are permitted to access.

---

## 2. Tooling: Frappe Desk vs. Admin UI

Admin tasks are split between two primary interfaces: the raw backend interface (Frappe Desk) and the user-friendly, purpose-built frontend interface (Admin UI).

### Frappe Desk (Direct Data Management)

The Frappe Desk is used by technical administrators for initial setup, low-level configuration, and direct data manipulation. This is where the "scaffolding" of the platform is managed.

-   **Platform Module**: Creating the initial records for new modules.
-   **External Service Reference**: Defining new third-party services the platform can potentially connect to.
-   **Integration Connection**: Initial, secure setup of credentials and environment configurations.
-   **Navigation Rule**: Creating and managing the raw records for the platform's navigation structure.
-   **Subscription Plan**: Defining the core structure and entitlement links for new plans.
-   **All Platform Records**: Direct access to view and, if necessary, manually edit any of the core platform records defined in `platform_records.md`.

### Admin UI (`/admin` Surface)

The Admin UI provides a user-friendly, business-oriented interface for day-to-day management of the platform. It is designed for business administrators and abstracts away the raw data models.

-   **Customer Management**: Viewing a list of all customers, accessing their account details, and changing their `Account State` (e.g., suspending an account).
-   **Subscription & Entitlement Management**: A user-friendly interface to assign a `Subscription Plan` to a customer and to add or remove `Entitlement` overrides with a few clicks.
-   **Module & Launch Management**: A dashboard that lists all modules from the `Module Registry`. Admins can use simple toggles to:
    -   Globally enable or disable a module.
    -   Place a module into `maintenance` mode.
-   **Integration Health Dashboard**: A view that shows the `health_status` of all configured `Integration Connections`, with clear visual indicators for `healthy`, `degraded`, or `unhealthy` states.
-   **Content Management**: (Future) Tools for managing public-facing content, such as marketing pages, help articles, and announcements.
