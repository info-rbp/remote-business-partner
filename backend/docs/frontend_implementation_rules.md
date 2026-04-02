# Frontend Implementation Rules

These rules are intended to guide the development of the frontend application and prevent the introduction of backend logic into the frontend codebase.

1.  **The frontend is a UI/UX layer only.** It is responsible for rendering data provided by the backend and capturing user input. It must not contain any business logic, data validation, or permission checks.
2.  **The backend is the single source of truth.** All business logic, data, and permissions are owned by the backend. The frontend must treat the backend as the ultimate authority.
3.  **The frontend consumes backend state.** It does not create, modify, or determine business-critical state.
4.  **Role-aware UI is for display only.** The frontend can show or hide UI elements based on the user's role, but this is a cosmetic feature, not a security measure. The backend is responsible for enforcing all access control.
5.  **Middleware is not for authorization.** Next.js middleware can be used for routing and session management, but it must not be used to authorize access to protected resources. Every API call must be independently authorized by the backend.
6.  **Launch governance is a backend responsibility.** The frontend must not have the authority to launch applications directly. All launch requests must be sent to the backend for approval and execution.
7.  **No business logic in the browser.** All business rules, calculations, and data transformations must be performed by the backend.
8.  **The frontend must not trust user input.** All user input must be validated and sanitized by the backend.
9.  **API contracts are king.** The frontend must adhere to the API contracts defined by the backend. It must not make assumptions about the backend's implementation.
10. **Do not implement business truth in the frontend.** This includes, but is not limited to:
    *   Entitlement truth
    *   Billing truth
    *   Onboarding/compliance truth
    *   Approval truth
    *   Launch permission truth
    *   Customer/account state truth
