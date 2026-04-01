# Blueprint: Application Skeleton

## Overview

This document outlines the plan for building a four-surface application skeleton as per the build instructions. The goal is to create a route-complete skeleton with a consistent design system, shared shell language, and a clear screen inventory for each surface.

## Project Outline

### Design System and Styling

*   **Framework:** Tailwind CSS will be used for styling.
*   **Base Styles:** `src/app/globals.css` will define the base styles, including fonts, colors, and other design tokens.
*   **Components:** Reusable UI components will be located in the `src/components` directory.

### Application Structure

The application will be divided into four distinct surfaces:

1.  **Front-Facing Website (`/`)**: Public-facing pages for marketing, information, and user acquisition.
2.  **Client Portal (`/portal`)**: Authenticated area for customers to manage their accounts, access services, and view their data.
3.  **Admin Portal (`/admin`)**: Internal console for administrators to manage the platform, content, users, and other resources.
4.  **Application Layer (`/app`)**: Governed module system within the platform shell.

### Implemented Features and Styles

*   **Initial Setup:**
    *   Next.js project with TypeScript.
    *   Tailwind CSS configured.
    *   Basic project structure created.
*   **Styling:**
    *   A modern, clean design will be applied, focusing on visual hierarchy, readability, and a consistent user experience across all surfaces.
    *   Colors: A primary color palette will be established, with variations for different states (e.g., success, warning, error).
    *   Typography: A clear typographic scale will be defined to ensure consistency in headings, paragraphs, and other text elements.
*   **Layout:**
    *   Each of the four surfaces will have its own dedicated layout file (`layout.tsx`).
    *   A shared component will be created for common UI elements like headers, footers, and navigation bars.

## Current Plan

### Phase 1: Foundation and Scaffolding

1.  **Create `blueprint.md`:** Establish the single source of truth for the project plan. (Completed)
2.  **Structure `src` Directory:** Organize the `src` directory to align with the build instructions, creating folders for `components`, `features`, `routes`, `services`, `auth`, and `design-system`.
3.  **Implement Global Styles:** Configure `tailwind.config.ts` and define base styles in `src/app/globals.css`.
4.  **Create Initial Layouts:** Develop the main layout files for each of the four surfaces.
5.  **Develop Shared Navigation:** Create reusable navigation components for each surface.
6.  **Build Out Core Pages:** Create the initial pages for each surface as defined in the build instructions.
