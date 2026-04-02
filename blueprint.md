# Project Blueprint

## Overview

This document outlines the development plan for creating a comprehensive web application. The application will feature a public-facing website, a client portal, and an admin area, all built on a modern Next.js stack with Firebase integration.

## Implemented Features (Phases 1-3)

*   **Project Scaffolding**: Initialized a Next.js project with the App Router.
*   **Public Pages & Forms**: Created placeholder pages and functional forms for public interaction (Contact, Lead Capture, Support, etc.), all connected to server actions.
*   **Component Library**: Set up a basic component library using `shadcn/ui`.
*   **Styling**: Configured Tailwind CSS for styling.
*   **Authentication Flow**: Implemented a complete authentication system using Firebase, including registration, login, password reset, session management, and route protection via middleware.
*   **Application Launchpad (Launch Model)**: Built a robust, backend-driven system for launching modules and services, complete with stateful UI cards, remediation handling, and mock API endpoints.

## Current Plan (Phase 4)

### 1. Implement Authenticated Support System

The goal is to create a support ticket system within the client portal, allowing authenticated users to view and manage their support requests.

*   **Mock Support Ticket Data**:
    *   Create a new mock data file (`src/lib/mock-support-data.ts`) to simulate a collection of support tickets with different statuses (e.g., open, in_progress, resolved).
*   **Support Ticket API**:
    *   Create a new API route (`GET /api/support/tickets`) that returns the mock ticket data for the "logged-in" user.
*   **Support Page UI**:
    *   Develop the UI for the `/portal/support` page.
    *   The page will fetch and display a list of the user's support tickets.
    *   Create components to render the ticket list and individual ticket items, showing key information like ticket ID, status, and subject.

### 2. Implement Profile & Team Management

The objective is to build out the sections where users can manage their personal and team information.

*   **Profile Management**:
    *   Create the UI for the `/portal/profile` page.
    *   The page will display the user's information (e.g., name, email).
    *   Implement a form, connected to a server action, that allows users to update their profile details.
*   **Team Management (Placeholder)**:
    *   Create a placeholder UI for the `/portal/team` page.
    *   This page will indicate where team management features will be located in the future, but will not have full functionality in this phase.

This plan addresses the final outstanding items from the initial project stage, ensuring the client portal has the core functionalities of support, profile, and team management.
