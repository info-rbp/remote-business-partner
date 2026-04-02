# Platform Records

This document defines the core backend data models for the Remote Business Partner platform. These records will eventually be implemented as DocTypes in Frappe and serve as the single source of truth for modules, subscriptions, entitlements, and integrations.

## 1. Platform Module

-   **Purpose:** Represents a business capability or application that can be offered to a customer (e.g., Sales, Finance).
-   **What it does NOT represent:** A running instance of an application.
-   **Core Fields:**
    -   `module_id` (Unique ID)
    -   `module_name` (e.g., "Sales CRM")
    -   `description` (Text)
    -   `version` (String)
    -   `is_core_platform` (Boolean)
-   **Relationships:**
    -   **Customer:** Many-to-many through Entitlements.
    -   **Module:** One-to-many with Launch Configurations.
    -   **Entitlement:** One-to-many.
    -   **Launch:** One-to-many with Launch Configurations.
-   **Ownership:** Modules Domain

## 2. Navigation Rule

-   **Purpose:** Defines a single navigation item within any of the application surfaces (public, portal, admin, app).
-   **What it does NOT represent:** The page content or the underlying business logic.
-   **Core Fields:**
    -   `rule_id` (Unique ID)
    -   `surface` (Select: public, portal, admin, app)
    -   `route` (String)
    -   `label` (String)
    -   `required_role` (Link to Role DocType, placeholder)
    -   `required_state` (e.g., "subscribed", "active_trial")
-   **Relationships:**
    -   **Customer:** Indirectly through role and state checks.
    -   **Module:** Can be linked to a module to control visibility.
    -   **Entitlement:** A rule can be shown/hidden based on an Entitlement.
    -   **Launch:** N/A.
-   **Ownership:** Shell (Control Plane)

## 3. Subscription Plan

-   **Purpose:** A template that defines a set of entitlements, pricing, and billing cycles.
-   **What it does NOT represent:** A customer's active subscription.
-   **Core Fields:**
    -   `plan_id` (Unique ID)
    -   `plan_name` (e.g., "Starter", "Professional")
    -   `price` (Currency)
    -   `billing_cycle` (Select: monthly, yearly)
    -   `included_entitlements` (Table of links to Platform Modules)
-   **Relationships:**
    -   **Customer:** N/A.
    -   **Module:** Many-to-many through `included_entitlements`.
    -   **Entitlement:** Defines which entitlements are granted by a Subscription.
    -   **Launch:** N/A.
-   **Ownership:** Subscription Domain

## 4. Subscription

-   **Purpose:** Represents a customer's active subscription to a Subscription Plan.
-   **What it does NOT represent:** The specific entitlements granted (these are a separate record).
-   **Core Fields:**
    -   `subscription_id` (Unique ID)
    -   `customer` (Link to Customer)
    -   `plan` (Link to Subscription Plan)
    -   `start_date` (Date)
    -   `end_date` (Date)
    -   `status` (Select: active, cancelled, expired)
-   **Relationships:**
    -   **Customer:** Many-to-one.
    -   **Module:** Indirectly through the Subscription Plan.
    -   **Entitlement:** One-to-many (a subscription creates entitlements).
    -   **Launch:** N/A.
-   **Ownership:** Subscription Domain

## 5. Entitlement

-   **Purpose:** Grants a specific customer access to a specific Platform Module.
-   **What it does NOT represent:** A subscription plan or detailed in-app permissions.
-   **Core Fields:**
    -   `entitlement_id` (Unique ID)
    -   `customer` (Link to Customer)
    -   `module` (Link to Platform Module)
    -   `granted_date` (Date)
    -   `expiry_date` (Date, optional)
    -   `source_subscription` (Link to Subscription)
-   **Relationships:**
    -   **Customer:** Many-to-one.
    -   **Module:** Many-to-one.
    -   **Entitlement:** N/A.
    -   **Launch:** One-to-one with a Launch Configuration.
-   **Ownership:** Subscription Domain

## 6. Billing Account

-   **Purpose:** Stores a customer's billing and payment information.
-   **What it does NOT represent:** A history of transactions (see Payment Mirror Record).
-   **Core Fields:**
    -   `account_id` (Unique ID)
    -   `customer` (Link to Customer)
    -   `payment_method_token` (String, from payment provider)
    -   `billing_address` (Address)
-   **Relationships:**
    -   **Customer:** One-to-one.
    -   **Module:** N/A.
    -   **Entitlement:** N/A.
    -   **Launch:** N/A.
-   **Ownership:** Subscription Domain

## 7. Application Access Rule

-   **Purpose:** Defines fine-grained permissions within a specific module (e.g., who can create, read, update, delete).
-   **What it does NOT represent:** High-level access to the module itself (this is an Entitlement).
-   **Core Fields:**
    -   `rule_id` (Unique ID)
    -   `module` (Link to Platform Module)
    -   `role` (String)
    -   `action` (Select: create, read, update, delete)
    -   `resource` (String, e.g., "Invoice", "Customer")
-   **Relationships:**
    -   **Customer:** Indirectly through user roles.
    -   **Module:** Many-to-one.
    -   **Entitlement:** N/A.
    -   **Launch:** N/A.
-   **Ownership:** Modules Domain

## 8. Integration Connection

-   **Purpose:** Stores customer-specific credentials and configuration for an external service.
-   **What it does NOT represent:** The definition of the external service itself.
-   **Core Fields:**
    -   `connection_id` (Unique ID)
    -   `customer` (Link to Customer)
    -   `service` (Link to External Service Reference)
    -   `credentials` (JSON, encrypted)
    -   `status` (Select: connected, disconnected, error)
-   **Relationships:**
    -   **Customer:** Many-to-one.
    -   **Module:** Can be linked to a module that uses this integration.
    -   **Entitlement:** N/A.
    -   **Launch:** N/A.
-   **Ownership:** Modules Domain

## 9. External Service Reference

-   **Purpose:** A central definition of a third-party service the platform can integrate with.
-   **What it does NOT represent:** A customer's connection to that service.
-   **Core Fields:**
    -   `service_id` (Unique ID)
    -   `service_name` (e.g., "Stripe", "QuickBooks")
    -   `service_type` (e.g., "Payment Gateway", "Accounting")
    -   `api_docs_url` (URL)
-   **Relationships:**
    -   **Customer:** N/A.
    -   **Module:** Many-to-many (modules can use multiple services).
    -   **Entitlement:** N/A.
    -   **Launch:** N/A.
-   **Ownership:** Modules Domain

## 10. Launch Configuration

-   **Purpose:** Defines the specific parameters needed to launch a module for a customer.
-   **What it does NOT represent:** The running application instance itself.
-   **Core Fields:**
    -   `config_id` (Unique ID)
    -   `entitlement` (Link to Entitlement)
    -   `launch_url` (URL)
    -   `sso_config` (JSON)
    -   `readiness_status` (Select: ready, pending, error)
-   **Relationships:**
    -   **Customer:** Indirectly through Entitlement.
    -   **Module:** Indirectly through Entitlement.
    -   **Entitlement:** One-to-one.
    -   **Launch:** This record *is* the launch definition.
-   **Ownership:** Modules Domain

## 11. Customer Timeline Event

-   **Purpose:** Records a significant, human-readable event in the customer's journey.
-   **What it does NOT represent:** A detailed, low-level audit log.
-   **Core Fields:**
    -   `event_id` (Unique ID)
    -   `customer` (Link to Customer)
    -   `timestamp` (Datetime)
    -   `event_type` (e.g., "Subscription Started", "Module Launched")
    -   `description` (Text)
-   **Relationships:**
    -   **Customer:** Many-to-one.
    -   **Module:** Can be linked to a module.
    -   **Entitlement:** Can be linked to an entitlement change.
    -   **Launch:** Can be linked to a launch event.
-   **Ownership:** Dashboard Domain

## 12. Customer Onboarding Case

-   **Purpose:** Tracks the state and progress of a new customer's onboarding process.
-   **What it does NOT represent:** A generic support ticket.
-   **Core Fields:**
    -   `case_id` (Unique ID)
    -   `customer` (Link to Customer)
    -   `status` (Select: not_started, in_progress, completed)
    -   `onboarding_checklist` (JSON of steps)
    -   `assigned_to` (Link to User)
-   **Relationships:**
    -   **Customer:** One-to-one (for the initial onboarding).
    -   **Module:** N/A.
    -   **Entitlement:** N/A.
    -   **Launch:** N/A.
-   **Ownership:** Dashboard Domain

## 13. Payment Mirror Record

-   **Purpose:** Stores an immutable, local copy of a transaction from an external payment provider.
-   **What it does NOT represent:** The authoritative source of truth for the transaction (that is the payment provider).
-   **Core Fields:**
    -   `record_id` (Unique ID)
    -   `billing_account` (Link to Billing Account)
    -   `provider_transaction_id` (String)
    -   `amount` (Currency)
    -   `status` (e.g., "succeeded", "failed")
    -   `timestamp` (Datetime)
-   **Relationships:**
    -   **Customer:** Indirectly through Billing Account.
    -   **Module:** N/A.
    -   **Entitlement:** A successful payment can trigger entitlement creation.
    -   **Launch:** N/A.
-   **Ownership:** Subscription Domain

---

## Relationship Diagram

This text-based diagram illustrates the core relationships between customers, subscriptions, modules, and launches.

```
[Customer]
 |
 +-- 1..* [Subscription] (A customer can have multiple subscriptions over time)
 |      |
 |      +-- 1..1 [Subscription Plan] (Each subscription is based on one plan)
 |      |
 |      +-- 1..* [Entitlement] (A subscription grants entitlements)
 |             |
 |             +-- 1..1 [Platform Module] (Each entitlement is for one module)
 |             |
 |             +-- 1..1 [Launch Configuration] (Each entitlement has one launch config)
 |
 +-- 1..1 [Billing Account] (A customer has one billing account)
 |
 +-- 1..* [Customer Timeline Event]
 |
 +-- 1..1 [Customer Onboarding Case]


Access Flow:
[Customer] -> has active [Subscription] -> which grants [Entitlement] -> for a specific [Platform Module] -> which has a [Launch Configuration]
```
