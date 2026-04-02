# Launch Configuration Engine

This document defines the backend model and logic for the Launch Configuration Engine. This engine is responsible for making all decisions about how and if a module or service can be launched, ensuring that every launch is a governed, backend-driven event.

## 1. Launch Configuration Structure

A Launch Configuration record is attached to every launchable object (e.g., a Platform Module via an Entitlement). It holds all the necessary metadata to determine launch readiness and method.

### Launch Method (`launch_method`)

This field defines *how* a module is launched. The backend resolves this to a specific action.

| Method     | Description                                                                                              |
| :--------- | :------------------------------------------------------------------------------------------------------- |
| `native`   | The module is a standard, internal route within the Next.js application (e.g., `/app/modules/sales`).    |
| `embed`    | The module is an external service rendered within an `<iframe>` in the platform's UI shell.              |
| `sso`      | The module is an external service that is launched via a Single Sign-On (SSO) flow initiated by the backend. |
| `redirect` | The user is sent to an external URL. This is used for services that do not support SSO or embedding.     |
| `none`     | The module is not launchable (e.g., a background service or a data provider).                              |

### Availability State (`availability_state`)

This field represents the current launch status of the module for a given user. It is resolved in real-time by the Launch-Readiness Logic.

| State                   | Description                                                                                         |
| :---------------------- | :-------------------------------------------------------------------------------------------------- |
| `available`             | The module is ready and can be launched.                                                            |
| `restricted`            | The user lacks the necessary role or permission to launch this module.                              |
| `pending`               | The module is not yet fully configured or enabled. This is a temporary state.                       |
| `onboarding_required`   | The user must complete a specific onboarding process before the module can be launched.             |
| `billing_hold`          | The customer's account has a billing issue (e.g., overdue payment) that prevents module access.     |
| `compliance_hold`       | The customer's account has a compliance issue that must be resolved.                                |
| `inactive`              | The module has been explicitly disabled, either globally or for this customer.                      |
| `maintenance`           | The module is temporarily unavailable due to scheduled maintenance.                                 |

### Reason Codes and Remediation Actions

To provide a clear user experience, a blocked state is always accompanied by a reason and a path to resolution.

-   **`reason_codes`**: A list of machine-readable codes explaining the current state (e.g., `[ACCOUNT_SUSPENDED, PAYMENT_OVERDUE]`).
-   **`remediation_actions`**: A list of actions the user can take (e.g., `[UPDATE_PAYMENT_METHOD, CONTACT_SUPPORT]`). The frontend uses these to render helpful links and messages.

### Allowed Surfaces (`allowed_surfaces`)

This is a list of application surfaces (`public`, `portal`, `admin`, `app`) where this module is permitted to be launched from.

## 2. Launch-Readiness Logic

This is the core decision-making process of the engine. It runs on the backend every time a user attempts to view or launch a module.

### Inputs

The logic takes three primary inputs to make a decision:

1.  **Entitlement Record**: Confirms the customer has the right to access the module.
2.  **Account State**: Checks the overall status of the customer's account (e.g., billing status, compliance flags).
3.  **Module Registry & Configuration**: Provides the module's master configuration, such as its launch method and whether it's under maintenance.

### Logic Flow

The readiness check follows a specific order of operations:

1.  **Check for Global Inactive/Maintenance:** Is the module globally disabled or in maintenance?
    -   If YES -> Block launch. Output state: `inactive` or `maintenance`.
2.  **Check for Entitlement:** Does the user have a valid Entitlement for this module?
    -   If NO -> Block launch. Output state: `restricted`.
3.  **Check Account State:** Is there a `billing_hold` or `compliance_hold` on the customer's account?
    -   If YES -> Block launch. Output state: `billing_hold` or `compliance_hold`.
4.  **Check Onboarding Status:** Does the module require onboarding, and is the `Customer Onboarding Case` for it complete?
    -   If NO -> Block launch. Output state: `onboarding_required`.
5.  **Check Readiness Status:** Is the `Launch Configuration` readiness status `pending` or in an `error` state?
    -   If YES -> Block launch. Output state: `pending`.
6.  **All Checks Passed:**
    -   If ALL checks pass -> Allow launch. Output state: `available`.

### Outputs

The logic produces a simple, structured JSON object for the frontend:

```json
{
  "launchable": true, // or false
  "state": "available", // or "billing_hold", etc.
  "reason_codes": ["PAYMENT_OVERDUE"],
  "remediation_actions": ["UPDATE_PAYMENT_METHOD"]
}
```

This allows the UI to render the correct state (e.g., a disabled button with a tooltip) without containing any of the decision logic itself.

## 3. Launch Execution Model

To ensure no user-facing service launch bypasses backend control, the frontend never knows the direct target of a launch.

1.  **User Action:** The user clicks a "Launch" button in the frontend for a module (e.g., "Finance").
2.  **Frontend Request:** The frontend sends a request to a dedicated backend endpoint, like `POST /api/launch`. The request body contains only the `module_key`: `{"module": "finance"}`.
3.  **Backend Processing:**
    a.  The backend runs the **Launch-Readiness Logic** for the current user and the requested module.
    b.  If the launch is blocked, it returns the structured JSON output (as above) with `launchable: false`.
    c.  If the launch is allowed, the backend retrieves the `launch_method` and target from the `Launch Configuration` record.
4.  **Backend Response:**
    *   For a `native` launch, it returns a simple success response, and the frontend navigates to the known internal route (e.g., `/app/modules/finance`).
    *   For `sso`, `embed`, or `redirect`, the backend generates a secure, one-time-use URL or initiates the SSO handshake. It then returns this temporary URL in the response. **The raw, permanent external URL is never exposed.**
5.  **Frontend Action:**
    *   If the launch was blocked, the UI updates to show the reason and remediation steps.
    *   If the launch was allowed, the frontend uses the URL provided by the backend to either redirect the user or load the content into an `<iframe>`.

This model guarantees that all access control, state checking, and destination routing is owned and enforced exclusively by the backend.
