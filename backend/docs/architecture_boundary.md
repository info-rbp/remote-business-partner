# Architecture Boundary

This document defines the architectural boundary between the frontend, backend, and other components of the Remote Business Partner platform.

## Frontend Ownership (Firebase Studio)

The frontend is responsible for the **presentation and user interaction layer**. Its ownership includes:

*   **UI/UX:** Rendering components, managing layout, and ensuring a responsive user experience.
*   **Client-side State:** Managing temporary UI state (e.g., form inputs, modal visibility).
*   **User Input:** Capturing user actions and forwarding them to the backend via API calls.
*   **Display Logic:** Implementing role-aware UI scaffolding that *displays* data based on backend-provided state, but does not *determine* the state itself.

## Backend Ownership (Frappe)

The backend is the **single source of truth** for all business logic, data, and permissions. Its ownership includes:

*   **Business Rules:** Implementing all core business logic and workflows.
*   **Data Persistence:** Storing and managing all application data in the database.
*   **Authentication & Authorization:** Verifying user identity and enforcing permissions.
*   **API Endpoints:** Exposing secure and well-defined APIs for the frontend to consume.

## Manifest Ownership

The `integrations/repo-manifest/repos.manifest.json` file owns the definition of the **repository ecosystem**. It is a declarative asset that defines the relationships between different codebases, but it does not contain any business logic itself.

## External Services

External services (e.g., payment gateways, email providers) are treated as **third-party dependencies**. They do not own any core business truth. The backend is responsible for integrating with these services and managing the data flow between them and our platform.

## Do Not Implement in Frontend

The following concerns **must not** be implemented in the frontend. The frontend should only consume the state and permissions determined by the backend.

*   **Entitlement Truth:** The frontend must not contain logic that determines a user's entitlements or access to features.
*   **Billing Truth:** The frontend must not contain logic that determines a user's billing status, subscription level, or payment history.
*   **Onboarding/Compliance Truth:** The frontend must not contain logic that determines a user's onboarding status or compliance with any requirements.
*   **Approval Truth:** The frontend must not contain logic that determines the status of any approval workflows.
*   **Launch Permission Truth:** The frontend must not contain logic that determines whether a user has permission to launch an application or service.
*   **Customer/Account State Truth:** The frontend must not contain logic that determines the state of a customer or account.
