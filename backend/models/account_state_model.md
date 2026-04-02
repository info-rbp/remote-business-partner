# Customer Account State Model

This document defines the state model for a customer account. The account's state is a critical input for the **Entitlement Engine** and the **Launch Configuration Engine**, directly driving access control and launch behavior across the entire platform.

The state model ensures that a user's ability to interact with the platform is always aligned with their account's current status (e.g., onboarding progress, billing health, compliance status).

---

## 1. Account States

Each customer account must exist in one of the following defined states.

### `pending_activation`

-   **Meaning**: The user has registered, but their account is not yet active. They typically need to verify their email address.
-   **Allowed Actions**:
    -   Receive a verification email.
    -   Click the verification link.
-   **Blocked Actions**:
    -   Logging in to the platform.
    -   Accessing any protected surface (`/app`, `/portal`, `/admin`).
    -   Launching any modules.
    -   Making any API calls.
-   **Affected Modules**: All.
-   **Remediation**: The user must complete the account activation step, typically by clicking a link sent to their registered email address.

### `onboarding`

-   **Meaning**: The user has activated their account but has not yet completed the mandatory setup steps required for full platform access.
-   **Allowed Actions**:
    -   Log in to the platform.
    -   Access a restricted version of the `/portal` or `/app` surface.
    -   Interact with UI elements and forms directly related to the onboarding process (e.g., setting up a billing account, connecting a required integration).
-   **Blocked Actions**:
    -   Accessing the full application dashboard.
    -   Launching any modules not essential for the onboarding process.
    -   Accessing general API endpoints.
-   **Affected Modules**: All modules except those explicitly required for onboarding.
-   **Remediation**: The user must complete all required steps in their `Customer Onboarding Case`. The system will then automatically transition them to the `active` state.

### `active`

-   **Meaning**: The account is fully operational and in good standing. This is the normal state for a healthy customer.
-   **Allowed Actions**: All actions permitted by the user's role and the entitlements granted by their subscription plan.
-   **Blocked Actions**: None (outside of standard permission restrictions).
-   **Affected Modules**: None.
-   **Remediation**: N/A.

### `billing_hold`

-   **Meaning**: The account is temporarily restricted due to a billing failure (e.g., an expired credit card, insufficient funds).
-   **Allowed Actions**:
    -   Log in to the platform.
    -   Access the `/portal/billing` surface to manage their subscription and update payment details.
-   **Blocked Actions**:
    -   Accessing the `/app` surface and its modules.
    -   Launching any modules.
    -   Making API calls to module-specific endpoints.
-   **Affected Modules**: All. The **Launch Configuration Engine** will block all launch attempts with the state `billing_hold`.
-   **Remediation**: The customer must resolve the payment issue. This is typically an automatic process; a webhook from the payment provider confirming a successful transaction will clear the hold.

### `compliance_hold`

-   **Meaning**: An administrator has placed a temporary restriction on the account pending the resolution of a compliance issue (e.g., missing required legal documents, identity verification).
-   **Allowed Actions**:
    -   Log in to the platform.
    -   Access a restricted view of the `/portal` to understand the issue and take necessary action (e.g., upload documents).
-   **Blocked Actions**:
    -   Accessing the `/app` surface.
    -   Launching any modules.
    -   Making most API calls.
-   **Affected Modules**: All. The **Launch Configuration Engine** will block all launch attempts with the state `compliance_hold`.
-   **Remediation**: The customer must provide the required information. An administrator must then manually review and remove the compliance hold.

### `suspended`

-   **Meaning**: An administrator has manually and indefinitely suspended the account. This is the most severe state, typically used for terms of service violations or other critical issues.
-   **Allowed Actions**: None.
-   **Blocked Actions**:
    -   All login attempts.
    -   All API calls.
    -   All platform access.
-   **Affected Modules**: All.
-   **Remediation**: This state can only be removed by manual intervention from a platform administrator.

---

## 2. State Transitions

The following table describes the triggers that cause an account to transition from one state to another.

| From State             | To State               | Trigger                                                              |
| :--------------------- | :--------------------- | :------------------------------------------------------------------- |
| *(New Account)*        | `pending_activation`   | User submits the registration form.                                  |
| `pending_activation`   | `onboarding`           | User successfully verifies their email address.                      |
| `onboarding`           | `active`               | System automatically detects the `Customer Onboarding Case` is complete. |
| `active`               | `billing_hold`         | A webhook from the payment provider signals a failed payment.        |
| `billing_hold`         | `active`               | A webhook from the payment provider signals a successful payment.      |
| `active`               | `compliance_hold`      | An administrator manually flags the account for a compliance issue.  |
| `compliance_hold`      | `active`               | An administrator manually clears the compliance hold.                  |
| `active` (or any other) | `suspended`            | An administrator manually suspends the account.                      |
| `suspended`            | `active`               | An administrator manually reinstates the account.                    |

This state model ensures that the platform's response to a user's actions is always consistent and secure, directly reflecting the administrative and financial status of their account.
