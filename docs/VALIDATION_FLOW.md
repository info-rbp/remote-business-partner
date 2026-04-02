# End-to-End Data Flow Validation

This document describes the mock data flow implemented to validate the system's architecture. It provides a deterministic, testable, and complete simulation of a record's lifecycle, from creation to its appearance in downstream analytics.

## The Flow

The validation is managed through a user interface located at `/admin/validation`.

### Success Criteria

The flow is considered successful only when a user can navigate to the validation page and click through all four steps, receiving a successful response at each stage.

### The Stages

#### 1. Authentication Check

*   **UI Action:** The user clicks the "Run" button for the "Authentication Check" step.
*   **API Endpoint:** `GET /api/validation/auth/check`
*   **Purpose:** Simulates checking if the system has valid credentials for integrated services (e.g., Odoo, Dolibarr, Metabase).
*   **Mock Logic:** This endpoint returns a deterministic `AuthCheckResponse` indicating that all required API tokens and credentials are in place.

#### 2. Record Creation

*   **UI Action:** The user clicks the "Run" button for the "Record Creation" step.
*   **API Endpoint:** `POST /api/validation/record/create`
*   **Purpose:** Simulates the creation of a new data record (e.g., a `ThirdParty` in Dolibarr or a `Partner` in Odoo) via the platform's service layer.
*   **Mock Logic:** This endpoint generates a unique record ID and returns a `RecordCreationResponse`, confirming that the record was successfully "created."

#### 3. Sync Status Check

*   **UI Action:** The user clicks the "Run" button for the "Sync Status Check" step.
*   **API Endpoint:** `GET /api/validation/sync/status/[id]`
*   **Purpose:** Simulates querying an intermediate system or job queue (e.g., BullMQ) to check the status of the record's synchronization process to a data warehouse or central database.
*   **Mock Logic:** This endpoint takes the `recordId` from the previous step and returns a `SyncStatusResponse`, deterministically stating that the record's sync is `complete`.

#### 4. Reporting Visibility Check

*   **UI Action:** The user clicks the "Run" button for the "Reporting Visibility Check" step.
*   **API Endpoint:** `GET /api/validation/reporting/visibility/[id]`
*   **Purpose:** Simulates the final and most critical step: confirming that the data, having been created and synced, is now visible and queryable in a downstream reporting tool like Metabase.
*   **Mock Logic:** This endpoint takes the `recordId` and returns a `ReportingVisibilityResponse`, deterministically confirming that `isVisible` is `true`.

## Implementation

*   **Types:** All mock request and response objects are strongly typed in `src/lib/validation/types.ts`.
*   **UI:** The validation page is implemented in `src/app/admin/validation/page.tsx`.
*   **APIs:** Each validation stage has a corresponding API route in `src/app/api/validation/...`.

This mock flow provides a robust foundation for building the real implementation, ensuring that the entire data path is considered and architected from the beginning.
