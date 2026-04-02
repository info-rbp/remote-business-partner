# Stage 4.7: Initial Data Flow Validation

This document outlines the process and components for validating the platform's conceptual end-to-end data flow. Its purpose is to prove that the frontend architecture can support a full record lifecycle, from user authentication to analytics, even with a mocked backend.

## 1. Validation Objectives

-   **Prove Architectural Soundness:** Demonstrate that the frontend is capable of handling a multi-step, stateful process.
-   **Establish Data Contracts:** Use typed mocks to define the expected shape of data at each stage of the flow.
-   **Create a Deterministic Test Path:** Provide a repeatable way to test the flow on demand.

## 2. The Validation Flow

The flow is demonstrated on the `/admin/validation` page and consists of four distinct, sequential steps.

### Step 1: User Authentication
-   **Action:** The page checks for a mock authenticated user session.
-   **Mock:** A hardcoded user object with admin privileges.
-   **Success Criterion:** The page displays the mock user's email and role, confirming a session is active.

### Step 2: Platform Record Creation
-   **Action:** Clicking "Create Project Record" sends a request to a mock API endpoint (`/api/validation/record/create`).
-   **Mock:** The API simulates the creation of a 'Project' record in the Frappe backend. It returns a success response with a unique ID for the new record.
-   **Success Criterion:** The UI displays a success message with the new Project ID (e.g., `PROJ-001`).

### Step 3: Integration Sync Simulation
-   **Action:** Clicking "Check Sync Status" sends a request to a mock API endpoint (`/api/validation/sync/status/[id]`).
-   **Mock:** The API simulates checking the sync status of the record in an external service (e.g., Odoo). It returns a status of 'Synced'.
-   **Success Criterion:** The UI displays a success message indicating the record was synced (e.g., "Record PROJ-001 has been synced to Odoo.").

### Step 4: Reporting Visibility
-   **Action:** Clicking "Verify in Analytics" sends a request to a mock API endpoint (`/api/validation/reporting/visibility/[id]`).
-   **Mock:** The API simulates a query to an analytics platform (e.g., Metabase), confirming the record is now visible in reports.
-   **Success Criterion:** The UI displays a success message confirming visibility (e.g., "Record PROJ-001 is now visible in Metabase reports.").

## 3. What is Mocked vs. Real

-   **Real:**
    -   The Next.js frontend components, UI, and state management.
    -   The API routing infrastructure (`/api/...`).
    -   The full request/response cycle between the browser and the Next.js server.
-   **Mocked:**
    -   The user authentication check (no real login occurs).
    -   All backend logic. The mock API endpoints return hardcoded, successful responses and do not interact with a database or any external services.

## 4. Next Live Integration Requirements

To replace the mocks with a live implementation, the following backend components are required:

1.  **Live Authentication:** A working integration with Authentik that provides a real user session to the Next.js application.
2.  **Frappe API:** A `POST` endpoint in the Frappe backend to create new 'Project' records.
3.  **Sync Webhook/API:** An endpoint in the Frappe backend that can report the sync status of a record with external services.
4.  **Analytics API:** An endpoint or database view that allows querying for the existence of records for reporting purposes.
