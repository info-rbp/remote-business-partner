# Blueprint: Remote Business Partner Platform

## Overview

This document outlines the architecture and implementation plan for the Remote Business Partner platform. It follows a four-surface model: Public, Client Portal, Admin Portal, and Application Layer. This blueprint details the remaining tasks to complete Stage 1, ensuring alignment with all pre-defined contracts.

## Implemented Features

*   **Route Skeleton**: A comprehensive route skeleton exists for all four surfaces (`/`, `/portal`, `/admin`, `/app`), including module-level routes.
*   **Repository Manifest**: The repository ecosystem is defined in `integrations/repo-manifest/repos.manifest.json`.
*   **Partial API/Launch Mocking**: Some mock data and API routes for application launch exist.
*   **Authentication**: A basic Firebase-based authentication flow is in place.
*   **UI Framework**: `shadcn/ui` and Tailwind CSS are configured.

## Stage 1 Implementation Checklist

### User/Journey Logic

- [ ] **Public Surface**:
    - [ ] Implement UI for all public pages as defined in the screen inventory.
    - [ ] Ensure all forms (Contact, Lead Capture, Support) are fully functional with Server Actions.
- [ ] **Client Portal**:
    - [ ] Implement UI for all client portal pages.
    - [ ] Create a fully functional, authenticated support ticket system.
    - [ ] Implement profile management with a form to update user details.
    - [ ] Add a placeholder page for team management.
- [ ] **Admin Portal**:
    - [ ] Implement UI for all admin portal pages, focusing on list/detail/edit/configuration patterns.
    - [ ] Design for role-aware variations (e.g., Platform Admin, Content Admin).
- [ ] **Application Layer**:
    - [ ] Implement UI for the application layer, including the module catalog.
    - [ ] Ensure module cards can display different states (available, restricted, etc.).

### API/Response Model Implementation

- [ ] **Support Tickets API**:
    - [ ] Create a `GET /api/support/tickets` endpoint that returns mock support ticket data.
- [ ] **User Profile API**:
    - [ ] Create a `POST /api/user/profile` endpoint to handle profile updates.
- [ ] **Standardize API Responses**:
    - [ ] Ensure all API responses follow a consistent format (e.g., `{ success: boolean, data: any, error: string | null }`).

### Launch-Model Implementation

- [ ] **Application Launch API**:
    - [ ] Enhance the existing `GET /api/launch/readiness` endpoint to be more robust.
    - [ ] Create a `POST /api/launch/execute` endpoint to handle the "launch" action.
- [ ] **Module Card States**:
    - [ ] Connect the UI of the module cards in the application layer to the launch-model APIs to reflect the true state of each module.

### Ecosystem-Awareness Implementation

- [ ] **Repository Manifest Integration**:
    - [ ] Create a service or utility to read and parse the `repos.manifest.json` file.
    - [ ] Use the manifest data to dynamically populate the application and module catalogs, ensuring the UI reflects the defined ecosystem.

### Reusable Architecture Cleanup

- [ ] **Component Library**:
    - [ ] Refactor and organize the `shadcn/ui` components for better reusability.
    - [ ] Create shared components for standard UI patterns (e.g., page headers, data tables).
- [ ] **State Management**:
    - [ ] Implement a consistent state management strategy for handling UI states (loading, empty, error, success) across all pages.
- [ ] **Error Handling**:
    - [ ] Create a global error handling mechanism to catch and display errors gracefully.
- [ ] **Linting and Code Quality**:
    - [ ] Run `npm run lint -- --fix` to clean up the codebase.

---

I will now begin implementing the checklist, starting with the **User/Journey Logic** for the **Client Portal**.
