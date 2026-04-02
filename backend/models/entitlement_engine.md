# Entitlement Engine

This document defines the backend logic for the Entitlement Engine. This engine is the central authority for determining a user's access to modules, services, and documents based on their subscription plan, account state, and any applied overrides. All entitlement decisions are resolved on the backend.

## 1. Core Entitlement Concepts

The engine is built on a clear hierarchy of concepts that flow from the commercial plan down to specific access rights.

### Subscription Plan → Entitlement Set

-   A **Subscription Plan** (e.g., "Professional") is a commercial product. Its primary purpose in the backend is to define a *base set* of entitlements.
-   When a customer subscribes to a plan, the system generates a set of **Entitlement** records (e.g., one for `entitlement_crm`, one for `entitlement_sales`, etc.) linked to that customer and their subscription.
-   This creates a direct link: Customer → Subscription → Plan → Base Entitlements.

### Entitlement → Module Access

-   An active **Entitlement** record for a specific module (e.g., `entitlement_crm`) is the primary key that grants a customer access to that **Platform Module** (e.g., the CRM).
-   The **Module Registry** defines which entitlement is required for each module.
-   Without a corresponding active Entitlement record, a user cannot access or launch the module.

### Entitlement → Document/Service Access

-   Beyond module-level access, entitlements can be used for more granular control.
-   For example, a "Premium Support" entitlement might be required to create a high-priority ticket through the Support module's API. A "Reporting" entitlement could unlock access to specific reports within the Insights module.
-   This is checked at the API/service level, not in the UI.

## 2. Override Model

Overrides provide the flexibility to grant or revoke access outside of the standard subscription plans. An override is a dedicated record linked to a customer account.

-   **Manual Overrides:** An administrator can create a permanent override to grant a specific customer access to a module that is not in their plan. This is useful for custom deals or retaining legacy features for a customer.
-   **Admin Overrides (Global):** An administrator can create a global override to grant access to a specific module to *all* customers on a certain plan for a limited time, such as for a product promotion.
-   **Temporary Overrides:** These have an expiration date. They are used for free trials, promotional access, or providing temporary access to a feature while a customer resolves a billing issue.

## 3. Entitlement Evaluation Flow

This is the step-by-step logic the backend runs to determine a user's access rights in real-time.

### Inputs

1.  **User ID / Customer ID**: The subject whose access is being checked.
2.  **Customer Account Record**: Contains high-level state flags (`status`, `compliance_hold`).
3.  **Active Subscription Record**: Links to the `Subscription Plan` and contains its own status (`active`, `cancelled`).
4.  **Billing Account Record**: Contains the `billing_hold` state.
5.  **Active Override Records**: A list of all overrides applied to the customer.

### Process

The engine evaluates access in the following sequence:

1.  **Check for Blocking Account States**:
    -   Is the Customer `status` "suspended"? If yes, block all access immediately. Return an empty list of accessible modules with the reason `ACCOUNT_SUSPENDED`.
    -   Is the Billing Account on `billing_hold`? If yes, block all access. Return reason `BILLING_HOLD`.
2.  **Calculate Base Entitlements**:
    -   Retrieve the customer's active `Subscription`.
    -   From the `Subscription Plan`, get the list of base entitlements (e.g., `['entitlement_crm', 'entitlement_sales']`).
3.  **Apply Overrides**:
    -   Fetch all active `Override` records for the customer.
    -   Modify the base entitlement set:
        -   Add any entitlements granted by overrides.
        -   Remove any entitlements revoked by overrides.
    -   The result is the **Effective Entitlement Set**.
4.  **Resolve Against Module Registry**:
    -   Iterate through every module in the `Module Registry`.
    -   For each module, check if its `entitlement_requirement` is present in the **Effective Entitlement Set**.
5.  **Generate Output**:
    -   Create a list of modules where the check passed (`accessible_modules`).
    -   Create a list of modules where the check failed (`restricted_modules`), including a reason for the restriction (e.g., `REQUIRES_HIGHER_PLAN`).

### Output

The engine produces a structured JSON response for the requesting service (which then serves it to the frontend).

```json
{
  "accessible_modules": [
    { "module_key": "sales", ... },
    { "module_key": "customers", ... }
  ],
  "restricted_modules": [
    { "module_key": "finance", "reason": "REQUIRES_PROFESSIONAL_PLAN" },
    { "module_key": "compliance", "reason": "REQUIRES_PROFESSIONAL_PLAN" }
  ]
}
```

## 4. Edge Case Handling

-   **Billing Failure**: If a payment fails, a webhook from the payment provider updates the customer's `Billing Account` to `billing_hold: true`. The next time the Evaluation Flow runs, Step 1 will catch this and immediately block access. Access is restored automatically when a successful payment sets the flag back to `false`.
-   **Suspended Accounts**: An administrator can suspend a customer account. The Evaluation Flow checks this first, providing a definitive block on all services regardless of subscription status.
-   **Partial Entitlements**: If a customer on a "Starter" plan is granted a manual override for the "Compliance" module, the Evaluation Flow correctly handles this. The base entitlement set from the plan is augmented by the override, and the final output will show the "Compliance" module as accessible.

## 5. Core Guarantees

-   **No UI Logic**: The frontend does not contain any logic to check roles, plans, or states to determine access. It simply renders the lists provided by the backend. A button for an accessible module is rendered as active; a button for a restricted module is rendered as disabled with a tooltip explaining the reason.
-   **Backend Resolvable**: The entire entitlement status for any user can be fully resolved at any time using only backend data records. There is no dependency on cookies, session state, or other client-side information for access control decisions.
