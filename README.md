# Remote Business Partner Platform

This repository contains the frontend application for the Remote Business Partner platform. It is a Next.js application built with the App Router, TypeScript, and Tailwind CSS.

## Project Purpose

The primary goal of this platform is to provide a comprehensive, governed environment for business users to access a suite of native and external software tools. It acts as a central hub for managing applications, billing, support, and user access in a secure and consistent manner.

## Four-Surface Architecture

The application is designed around a clear four-surface model to separate concerns and provide a tailored user experience for different journeys:

1.  **Public Surface (`/`)**: The public-facing marketing and information website. It handles user registration, sign-in, and provides information about the platform's offerings.
2.  **Client Portal (`/portal`)**: The authenticated dashboard for customers. Here, clients can manage their subscription, billing, applications, and support tickets.
3.  **Admin Portal (`/admin`)**: The internal back-office for platform administrators. It provides tools for managing customers, content, applications, and system settings.
4.  **Application Layer (`/app`)**: The governed launchpad where users access the suite of integrated modules and services.

## Current Status: Stage 1 Complete

This repository represents the successful completion of **Stage 1**. The full frontend skeleton has been built out, complete with a centralized routing contract, role-aware navigation scaffolding, and a reusable component architecture. All UI components are wired to mock services that adhere to the defined API and response-model contracts, preparing the application for future backend integration.

## The Repository Manifest

A key component of this architecture is the repository manifest, located at `integrations/repo-manifest/repos.manifest.json`.

-   **Purpose**: The manifest serves as a catalogue of all external and ecosystem applications that the platform is aware of. It is used to dynamically populate the UI, distinguishing between native modules, external services, and applications pending integration.
-   **Important Note**: The manifest is a descriptive tool, **not runtime truth**. It informs the frontend of what *can* exist, but the actual availability of any module for a given user is determined by the backend based on their entitlements and account state.

## Local Development

To get the application running locally, follow these steps:

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run the Development Server**:
    > The development server is managed by the Firebase Studio environment and should already be running. Monitor the terminal output for real-time feedback. You do not need to run `npm run dev`.

3.  **Linting**:
    To check for and fix code quality issues, run:
    ```bash
    npm run lint -- --fix
    ```

## Key Architectural Principles

-   **Frontend is for Presentation**: The frontend is responsible for rendering the user interface based on data from the backend. It is not the source of truth for business logic, permissions, or application availability.
-   **Backend Governs All Logic**: All critical operations, including authentication, authorization, payments, entitlements, and launch governance, must be handled by backend services.
-   **No Raw URLs**: The frontend must not expose raw repository URLs or unmanaged links. All launch behavior is governed by the launch model.

This approach ensures the platform remains secure, scalable, and maintainable.
