# Architecture Overview

## Core Principle: Backend Authority

This document establishes the architectural principles for this project, defining the roles and responsibilities of the backend and frontend components.

### Single Source of Truth

The Frappe "inner bench" is the **single source of truth** and the authoritative runtime for all core business logic, data, and permissions. This includes, but is not limited to:

*   Customer State
*   Entitlement Logic
*   Payment State
*   Launch Governance

### Frontend Role

The frontend, developed within **Firebase Studio**, serves as the presentation and user interaction layer. Its primary responsibilities are:

*   Rendering user interfaces based on data provided by the backend.
*   Capturing user input and forwarding it to the backend via defined APIs.
*   Managing client-side state that is not persisted as a source of truth.

### Key Mandates

1.  **Backend-First Development**: All changes to business logic, data models, or core functionality **must** be implemented in the backend first. The frontend will then adapt to these changes.
2.  **No Direct Database Access**: The frontend is strictly prohibited from accessing any database directly. All data access must go through the APIs exposed by the backend.
3.  **API-Driven Communication**: The frontend and backend communicate exclusively through well-defined, secure APIs.

This clear separation of concerns ensures data integrity, security, and a scalable, maintainable application architecture.
