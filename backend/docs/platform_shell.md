# Platform Shell Definition

## Overview

This document defines the platform shell, which acts as the control plane for the Remote Business Partner application. The shell is not merely a UI layout but a backend-recognized structure that governs navigation, module visibility, entitlements, and launches. It connects the frontend user experience to the backend business logic.

## Backend Shell Domains

The platform shell is composed of four core backend domains:

### 1. Dashboard

The Dashboard is the user's entry point into the application. It provides a high-level overview of key information and quick access to important areas.

-   **Owns:** Aggregated data from other domains, summary views, notifications.
-   **Does NOT Own:** Core data or functionality of other domains.

### 2. Modules

The Modules domain manages the suite of available business applications (e.g., Sales, Finance, Operations). It controls which modules are accessible to the user based on their subscription and entitlements.

-   **Owns:** Module registry, module launch configurations, visibility rules.
-   **Does NOT Own:** The business logic within each module.

### 3. Subscription

The Subscription domain handles user plans, billing, and entitlements. It determines which features and modules a user has access to.

-   **Owns:** Subscription plans, billing cycles, payment information, entitlement mapping.
-   **Does NOT Own:** Application-level permissions within a module.

### 4. Settings

The Settings domain allows users to configure their account and application preferences.

-   **Owns:** User profile information, notification preferences, theme settings, API keys.
-   **Does NOT Own:** System-wide configurations (managed in the Admin portal).

## Domain Relationships

-   **Dashboard** reads data from **Modules** and **Subscription** to display relevant summaries.
-   **Subscription** dictates which items in the **Modules** domain are accessible.
-   **Settings** are applied across all domains to tailor the user experience.

## Frontend Route to Backend Domain Mapping

| Frontend Route          | Backend Domain | Description                               |
| ----------------------- | -------------- | ----------------------------------------- |
| `/app/dashboard`        | Dashboard      | Main application dashboard                |
| `/app/modules`          | Modules        | Lists available and active modules        |
| `/app/subscription`     | Subscription   | Manages user subscription and billing     |
| `/app/settings`         | Settings       | User-specific application settings        |
| `/portal/dashboard`     | Dashboard      | Client portal overview                    |
| `/admin/dashboard`      | Dashboard      | Admin portal overview                     |

## Shell as a Control Plane

The shell is the authoritative source for the application's structure and navigation. It controls:

-   **Modules:** Which modules are available and can be launched.
-   **Launches:** The configuration and readiness state for launching external module applications.
-   **Entitlements:** What features and data a user is entitled to access based on their subscription.
-   **Navigation:** The available routes and menu items presented to the user.

## Shell Ownership Rules

-   **Shell Owns Visibility and Navigation:** The shell determines *what* is shown to the user and *how* they can navigate to it.
-   **Backend Owns Truth:** The Frappe backend is the single source of truth for all core business data and logic.
-   **Frontend Renders Only:** The Next.js frontend is responsible for rendering the UI based on the data and structure provided by the shell and backend. It does not contain business logic.
