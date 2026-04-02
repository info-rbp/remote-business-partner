# Module Registry

This document defines the backend-driven Module Registry for the Remote Business Partner platform. The registry is the single source of truth for all metadata related to platform modules, transforming them from simple frontend routes into governed, backend-managed objects.

## Module Registry Structure

Each module in the registry is defined with the following structure.

-   `module_key`: A unique, machine-readable identifier (e.g., `sales_crm`).
-   `module_name`: A human-readable name (e.g., "Sales CRM").
-   `module_family`: A high-level grouping (e.g., "Customer Engagement").
-   `description`: A brief summary of the module's purpose and capabilities.
-   `surfaces`: A list of application areas where the module is accessible (`public`, `portal`, `admin`, `app`).
-   `visibility_rules`: Conditions under which the module is visible (e.g., requires specific user role or subscription state).
-   `launch_pattern`: The mechanism for launching the module (`internal_route`, `external_sso`, `api_driven`).
-   `entitlement_requirement`: The specific entitlement required to access this module (links to `Platform Module` record).
-   `onboarding_requirement`: Specifies if a dedicated onboarding case is required before the module can be used.
-   `linked_external_service`: The external service this module integrates with, if any (links to `External Service Reference`).

---

## Module Definitions

### 1. Communications

-   **module\_key**: `communications`
-   **module\_name**: "Communications Hub"
-   **module\_family**: "Business Operations"
-   **description**: "Unified inbox and communication tools for customer and team messaging."
-   **surfaces**: `app`, `admin`
-   **visibility\_rules**: `Requires active subscription.`
-   **launch\_pattern**: `internal_route`
-   **entitlement\_requirement**: `entitlement_communications`
-   **onboarding\_requirement**: `False`
-   **linked\_external\_service**: `None`

### 2. Compliance

-   **module\_key**: `compliance`
-   **module\_name**: "Compliance Manager"
-   **module\_family**: "Risk & Governance"
-   **description**: "Tools for managing and monitoring regulatory compliance."
-   **surfaces**: `app`, `admin`
-   **visibility\_rules**: `Requires 'Professional' plan or higher.`
-   **launch\_pattern**: `internal_route`
-   **entitlement\_requirement**: `entitlement_compliance`
-   **onboarding\_requirement**: `True`
-   **linked\_external\_service**: `None`

### 3. Customers

-   **module\_key**: `customers`
-   **module\_name**: "Customer Relationship Management (CRM)"
-   **module\_family**: "Customer Engagement"
-   **description**: "Core CRM functionality for managing customer data and interactions."
-   **surfaces**: `app`, `admin`
-   **visibility\_rules**: `Requires active subscription.`
-   **launch\_pattern**: `internal_route`
-   **entitlement\_requirement**: `entitlement_crm`
-   **onboarding\_requirement**: `False`
-   **linked\_external\_service**: `None`

### 4. Finance

-   **module\_key**: `finance`
-   **module\_name**: "Finance & Accounting"
-   **module\_family**: "Financial Management"
-   **description**: "Manages invoicing, expenses, and financial reporting."
-   **surfaces**: `app`, `admin`
-   **visibility\_rules**: `Requires active subscription.`
-   **launch\_pattern**: `external_sso`
-   **entitlement\_requirement**: `entitlement_finance`
-   **onboarding\_requirement**: `True`
-   **linked\_external\_service**: `quickbooks`, `stripe`

### 5. Insights

-   **module\_key**: `insights`
-   **module\_name**: "Business Insights"
-   **module\_family**: "Analytics"
-   **description**: "Provides dashboards and reports on business performance."
-   **surfaces**: `app`, `admin`
-   **visibility\_rules**: `Requires active subscription.`
-   **launch\_pattern**: `internal_route`
-   **entitlement\_requirement**: `entitlement_insights`
-   **onboarding\_requirement**: `False`
-   **linked\_external\_service**: `None`

### 6. Knowledge

-   **module\_key**: `knowledge`
-   **module\_name**: "Knowledge Base"
-   **module\_family**: "Business Operations"
-   **description**: "Internal wiki and knowledge management system."
-   **surfaces**: `app`
-   **visibility\_rules**: `Requires active subscription.`
-   **launch\_pattern**: `internal_route`
-   **entitlement\_requirement**: `entitlement_knowledge`
-   **onboarding\_requirement**: `False`
-   **linked\_external\_service**: `None`

### 7. Lending

-   **module\_key**: `lending`
-   **module\_name**: "Lending Platform"
-   **module\_family**: "Financial Management"
-   **description**: "Manages loan applications, underwriting, and servicing."
-   **surfaces**: `app`, `admin`, `portal`
-   **visibility\_rules**: `Requires 'Financial' plan.`
-   **launch\_pattern**: `external_sso`
-   **entitlement\_requirement**: `entitlement_lending`
-   **onboarding\_requirement**: `True`
-   **linked\_external\_service**: `plaid`

### 8. Learning

-   **module\_key**: `learning`
-   **module\_name**: "Learning Management System (LMS)"
-   **module\_family**: "Team Management"
-   **description**: "Platform for creating and delivering training courses."
-   **surfaces**: `app`
-   **visibility\_rules**: `Requires active subscription.`
-   **launch\_pattern**: `internal_route`
-   **entitlement\_requirement**: `entitlement_learning`
-   **onboarding\_requirement**: `False`
-   **linked\_external\_service**: `None`

### 9. Operations

-   **module\_key**: `operations`
-   **module\_name**: "Operations Dashboard"
-   **module\_family**: "Business Operations"
-   **description**: "Tools for managing day-to-day business operations and workflows."
-   **surfaces**: `app`, `admin`
-   **visibility\_rules**: `Requires active subscription.`
-   **launch\_pattern**: `internal_route`
-   **entitlement\_requirement**: `entitlement_operations`
-   **onboarding\_requirement**: `False`
-   **linked\_external\_service**: `None`

### 10. People

-   **module\_key**: `people`
-   **module\_name**: "Human Resources (HR)"
-   **module\_family**: "Team Management"
-   **description**: "Manages employee records, payroll, and time off."
-   **surfaces**: `app`, `admin`
-   **visibility\_rules**: `Requires active subscription.`
-   **launch\_pattern**: `external_sso`
-   **entitlement\_requirement**: `entitlement_hr`
-   **onboarding\_requirement**: `True`
-   **linked\_external\_service**: `gusto`

### 11. Sales

-   **module\_key**: `sales`
-   **module\_name**: "Sales Pipeline"
-   **module\_family**: "Customer Engagement"
-   **description**: "Manages sales leads, deals, and pipeline forecasting."
-   **surfaces**: `app`, `admin`
-   **visibility\_rules**: `Requires active subscription.`
-   **launch\_pattern**: `internal_route`
-   **entitlement\_requirement**: `entitlement_sales`
-   **onboarding\_requirement**: `False`
-   **linked\_external\_service**: `None`

### 12. Support

-   **module\_key**: `support`
-   **module\_name**: "Support Ticketing"
-   **module\_family**: "Customer Engagement"
-   **description**: "Manages customer support requests and tickets."
-   **surfaces**: `app`, `admin`, `portal`
-   **visibility\_rules**: `Requires active subscription.`
-   **launch\_pattern**: `internal_route`
-   **entitlement\_requirement**: `entitlement_support`
-   **onboarding\_requirement**: `False`
-   **linked\_external\_service**: `None`

### 13. Teams

-   **module\_key**: `teams`
-   **module\_name**: "Team Collaboration"
-   **module\_family**: "Team Management"
-   **description**: "Tools for team chat, project management, and collaboration."
-   **surfaces**: `app`
-   **visibility\_rules**: `Requires active subscription.`
-   **launch\_pattern**: `internal_route`
-   **entitlement\_requirement**: `entitlement_teams`
-   **onboarding\_requirement**: `False`
-   **linked\_external\_service**: `None`

---

## Module Catalogue

This section provides a high-level overview and classification of all registered modules.

| Module Name              | Classification        | Description                                       |
| ------------------------ | --------------------- | ------------------------------------------------- |
| Communications Hub       | `Native`              | Core messaging and communication tools.           |
| Compliance Manager       | `Native`              | Tools for managing regulatory compliance.         |
| CRM                      | `Native`              | Core customer relationship management.            |
| Finance & Accounting     | `External`            | Integrates with external accounting software.     |
| Business Insights        | `Native`              | Core analytics and reporting.                     |
| Knowledge Base           | `Native`              | Internal documentation and knowledge sharing.     |
| Lending Platform         | `External`            | Integrates with external financial data providers.|
| LMS                      | `Native`              | Core learning and development tools.              |
| Operations Dashboard     | `Native`              | Core business process management.                 |
| Human Resources (HR)     | `External`            | Integrates with external HR/payroll systems.      |
| Sales Pipeline           | `Native`              | Core sales process management.                    |
| Support Ticketing        | `Native`              | Core customer support case management.            |
| Team Collaboration       | `Integration Pending` | Slated for integration with a chat provider.      |


---

## Admin Management Expectations

The Module Registry enables administrators to manage module availability and visibility directly from the admin portal.

-   **Enabling/Disabling Modules:**
    -   Administrators will have a view of all registered modules.
    -   They can toggle a module's global `is_active` status. A disabled module is not available to any customer, regardless of their entitlements.
    -   This acts as a master switch for module availability.

-   **Controlling Visibility:**
    -   Visibility will be primarily controlled by `Subscription Plans`.
    -   Administrators will be able to add or remove modules from a subscription plan, which in turn grants or revokes the corresponding `Entitlement`.
    -   The frontend will query the backend to get a list of a user's entitlements, and only render navigation and access to the modules they are entitled to. The registry provides the metadata, but the `Entitlement` record provides the access grant.
