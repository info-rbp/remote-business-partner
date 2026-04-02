# Safe Exposure Rules

This document defines the rules for what can and cannot be exposed in the user-facing UI to maintain security and architectural integrity.

## 1. No Raw Repository URLs

*   **Rule:** The frontend application **must not** contain or expose raw Git repository URLs (e.g., `https://github.com/info-rbp/rbp-core`).
*   **Reason:** Exposing repository URLs directly couples the UI to the underlying source code structure, creates a security risk, and bypasses the governed launch model.
*   **Implementation:** All user-facing links, buttons, or actions that relate to an application or module must be driven by the backend's Launch Configuration. The frontend should only receive a safe, abstract `launch_key` or a governed URL.

## 2. No Raw Admin/Vendor Console Links

*   **Rule:** Public and client-facing surfaces (`/`, `/portal`, `/app`) **must not** contain direct links to internal or third-party administration consoles (e.g., the Frappe Desk, a vendor's dashboard).
*   **Reason:** These links expose the internal architecture and can lead to unauthorized access attempts. Access to administrative functions should be restricted to the `/admin` surface and be protected by appropriate roles.
*   **Implementation:** All administrative functions should be accessed through the `/admin` portal, which has its own role-based access control.

## 3. All Launches Must Be Governed

*   **Rule:** Every action that "launches" an application, service, or module for a user **must** be processed through a backend-governed launch model.
*   **Reason:** Direct, ungoverned launches from the frontend bypass critical checks for entitlements, billing status, and permissions. The backend must be the ultimate authority on whether a user can access a resource.
*   **Implementation:** The frontend should send a request to a backend API endpoint (e.g., `/api/launch/execute`) with a `launch_key`. The backend then performs all necessary checks before redirecting the user or providing the necessary data to embed the application.

## 4. Referenced Services Are Not Directly Embeddable

*   **Rule:** Firebase Studio and other development tools should not treat a service or repository's presence in the `repos.manifest.json` as an implicit permission to embed or link to it directly.
*   **Reason:** The manifest is a tool for awareness, not a runtime contract. The actual availability and integration pattern for any service is determined by the backend's Integration Registry.
*   **Implementation:** Always assume a service is not directly accessible from the frontend. All interactions must be mediated by the backend.
