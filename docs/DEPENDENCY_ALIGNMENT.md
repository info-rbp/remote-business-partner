# Dependency and Patch Alignment Report

This document outlines the runtime dependencies, version expectations, and validation procedures for the platform. Its purpose is to ensure a stable and predictable environment across development, staging, and production.

## 1. High-Level Architecture

The platform operates on a hybrid model:

-   **Frontend:** A [Next.js](https://nextjs.org/) application responsible for the user interface, routing, and server-side rendering.
-   **Backend:** A [Frappe Framework](https://frappeframework.com/) application that serves as the primary backend, managing data, business logic, and background jobs.

This dual-stack architecture requires careful alignment between the Node.js and Python environments.

## 2. Dependency Expectations

### Node.js (Frontend)

-   **Node Version:** The project requires **Node.js v20.x**. This is enforced in the `package.json` `engines` field.
-   **Package Manager:** The project uses **npm**. The `package-lock.json` file is the source of truth for all Node.js dependencies.
-   **Key Libraries:**
    -   `next@14`: Core frontend framework.
    -   `react@18`: UI library.
    -   `tailwindcss`: CSS framework.
    -   `zod`: Configuration and data validation.

### Python (Backend)

-   **Frappe & ERPNext:** The backend relies on the Frappe framework. All backend dependencies are managed by `bench`.
-   **Bench Patch History:** `bench` manages database schema migrations and data updates via "patches". It is **critical** that the frontend application remains compatible with the backend after any patch is applied. All new development must be tested against the latest version of the staging backend.

## 3. Runtime Service Assumptions

### Redis

Redis is used by both the frontend and backend stacks:

-   **Backend (Frappe):** Used for caching, session management, and as a message broker for the background worker queue (RQ).
-   **Frontend (Next.js):** Intended for server-side caching and potentially session storage. *(TODO: Finalize Redis implementation strategy for Next.js caching. See `src/lib/cache.ts` for placeholder)*.

### Background Workers & Queues

-   **Primary System:** All asynchronous background jobs (e.g., sending emails, long-running reports) are managed by the **Frappe backend** using its built-in `RQ` (Redis Queue) worker system.
-   **Next.js:** The Next.js application **does not** run its own separate worker system. The `PLATFORM_QUEUE_URL` in the configuration is for connecting to the backend's queue if the frontend needs to enqueue jobs. *(TODO: Implement a client in `src/lib/queue.ts` to enqueue jobs in the Frappe backend's RQ instance)*.

### Sockets & Real-time

-   **Primary System:** The Frappe backend provides real-time updates via Socket.IO.
-   **Next.js:** The frontend should connect to the Frappe backend's Socket.IO server for any real-time functionality. No separate real-time server should be run from the Next.js application.

## 4. Validation and Commands

To ensure the environment is correctly configured, use the following commands and checks.

### Prerequisite Checks

Run these commands to verify your environment matches the project's requirements.

```bash
# Check Node.js version (should be v20.x)
node -v

# Check npm version
npm -v

# Check bench version (if working on the backend)
bench --version
```

### Validation Scripts

These scripts are defined in `package.json`.

-   **`npm run lint`**: Lints the code to check for quality and style issues.
-   **`npm run build`**: Compiles the Next.js application for production. This is a key check to ensure all frontend code is valid and all dependencies are correctly resolved.
-   **`npm run validate:config`**: A placeholder command. The application validates environment variables on startup (`next dev` or `next start`), but this script could be expanded to run a standalone check.

## 5. Patch-Impact Summary

-   **API Changes:** Patches to the Frappe backend can change API endpoints or data models. The frontend integration layer (`src/lib/integrations`) is the first line of defense, but any changes must be tested.
-   **State Inconsistency:** If a patch modifies data that the frontend has cached, the frontend may display stale information. A cache-invalidation strategy is required.

This hybrid model's stability depends on keeping the two stacks aligned. The Frappe backend is the system of record.
