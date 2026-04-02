# Surface Routing Enforcement Rules

This document defines the backend-driven rules that govern access to the primary application surfaces: `public`, `portal`, `admin`, and `app`. These rules are the authoritative source for routing decisions, ensuring that access control is enforced on the server, not just the client.

## Core Principle: Backend as the Source of Truth

The frontend middleware (`src/middleware.ts`) provides a responsive user experience by performing initial client-side route protection and redirection. However, it is considered a secondary layer. The **backend is the primary enforcement point**. Every API request to a protected surface must be validated against these rules on the server. A user must not be able to access protected data by bypassing the frontend UI.

---

## 1. Public Surface

-   **Route Prefix**: `/` (e.g., `/`, `/about`, `/contact`, `/sign-in`, `/register`)
-   **Purpose**: Provides marketing information, public resources, and the primary entry point for user authentication.

### Rules

| User State          | Allowed Routes                                | Redirect Behavior                                                                                             |
| :------------------ | :-------------------------------------------- | :------------------------------------------------------------------------------------------------------------ |
| **Unauthenticated** | All public routes.                            | N/A.                                                                                                          |
| **Authenticated**   | All informational routes (e.g., `/about`).      | Attempting to access `/sign-in` or `/register` should redirect the user to their default dashboard (`/app/dashboard` or `/portal/dashboard` based on role). |

---

## 2. App Surface

-   **Route Prefix**: `/app` (e.g., `/app/dashboard`, `/app/modules/*`, `/app/settings`)
-   **Purpose**: The core application environment for subscribed customers to use the platform's modules.

### Rules

| User State & Role | Account State                 | Entitlements / Launch        | Allowed? | Redirect Behavior / Reason                                                              |
| :---------------- | :---------------------------- | :--------------------------- | :------- | :-------------------------------------------------------------------------------------- |
| Unauthenticated   | N/A                           | N/A                          | **No**   | Redirect to `/sign-in`.                                                                 |
| Authenticated (Role: `user`) | `Active`                      | Has required entitlement     | **Yes**  | Access granted.                                                                         |
| Authenticated (Role: `user`) | `Active`                      | Lacks entitlement for a specific module | **Partial**  | Access to the surface is allowed, but the specific module route will be blocked by the **Launch Configuration Engine**. |
| Authenticated (Role: `user`) | `billing_hold` or `suspended` | N/A                          | **No**   | Redirect to a dedicated "Account Issue" page (e.g., `/portal/billing`).           |
| Authenticated (Role: `client` or `admin`) | `Active`                      | N/A                          | **No**   | Redirect to their respective dashboards (`/portal/dashboard`, `/admin/dashboard`). |

---

## 3. Portal Surface

-   **Route Prefix**: `/portal` (e.g., `/portal/dashboard`, `/portal/billing`, `/portal/profile`)
-   **Purpose**: A self-service area for customers (clients) to manage their account, billing, team members, and view high-level summaries.

### Rules

| User State & Role | Account State                 | Allowed? | Redirect Behavior / Reason                                                              |
| :---------------- | :---------------------------- | :------- | :-------------------------------------------------------------------------------------- |
| Unauthenticated   | N/A                           | **No**   | Redirect to `/sign-in`.                                                                 |
| Authenticated (Role: `client`) | `Active` or `billing_hold`    | **Yes**  | Access granted. The portal is the designated area to resolve account issues.    |
| Authenticated (Role: `client`) | `suspended`                   | **No**   | Redirect to a generic "Account Suspended" page or `/sign-in`.                   |
| Authenticated (Role: `user` or `admin`) | `Active`                      | **No**   | Redirect to their respective dashboards (`/app/dashboard`, `/admin/dashboard`).   |

---

## 4. Admin Surface

-   **Route Prefix**: `/admin` (e.g., `/admin/dashboard`, `/admin/customers`, `/admin/settings`)
-   **Purpose**: The control plane for internal staff to manage the platform, customers, subscriptions, and content.

### Rules

| User State & Role | Account State | Allowed? | Redirect Behavior / Reason                               |
| :---------------- | :------------ | :------- | :------------------------------------------------------- |
| Unauthenticated   | N/A           | **No**   | Redirect to `/sign-in`. The existence of the admin surface should not be confirmed with a 404. |
| Authenticated (Role: `client` or `user`) | N/A           | **No**   | Redirect to `/sign-in` or their respective dashboards.   |
| Authenticated (Role: `admin`) | `Active`      | **Yes**  | Access granted.                                          |

---

## Default Route Redirects

To ensure a clean user experience, requests for the base path of a protected surface should redirect to that surface's default dashboard.

-   `/app` → `/app/dashboard`
-   `/portal` → `/portal/dashboard`
-   `/admin` → `/admin/dashboard`

## Enforcement Mechanism

1.  **Backend Middleware**: A middleware layer on the backend server intercepts every incoming request.
2.  **Authentication Check**: It first validates the user's authentication token.
3.  **Route and Role Check**: It then checks the requested route prefix (`/app`, `/portal`, `/admin`) against the user's role (`user`, `client`, `admin`).
4.  **Account State Check**: For protected surfaces, it loads the customer's account record to check for `suspended` or `billing_hold` flags.
5.  **Decision**:
    -   If the user is authorized for the route and their account is in good standing, the request is passed to the next handler.
    -   If the user is unauthorized, the backend returns the appropriate HTTP status code (e.g., 401 Unauthorized, 403 Forbidden) or a redirect response (302 Found).

This backend enforcement ensures that even if the frontend middleware is bypassed, the API itself is secure and will not serve data to an unauthorized user.
