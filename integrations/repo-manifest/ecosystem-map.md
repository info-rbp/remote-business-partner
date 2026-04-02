# Platform Ecosystem Map

This document provides a visual map of the entire platform ecosystem, categorized by the `integrationType` defined in `repository-metadata.ts` based on the authoritative Stage 4.1 governance model.

## 1. Core Runtime (Runtime Adjacent & Submodules)
These are fundamental pillars of the platform, critical to the operational runtime.

- **Frappe** (`frappe`)
  - **Purpose:** Core framework and active platform foundation
  - **Type:** `runtime_adjacent`
  - **Criticality:** `runtime_critical`
  - **Launch:** `native`
  - **Status:** `active`
- **Core** (`rbp_core`)
  - **Purpose:** Custom platform shell and control plane
  - **Type:** `embedded_module`
  - **Criticality:** `runtime_critical`
  - **Launch:** `native`
  - **Status:** `active`

## 2. Authentication & Identity (SSO Targets)
Components managing access control.

- **Authentik** (`authentik`)
  - **Purpose:** Identity and access management
  - **Type:** `sso_target`
  - **Criticality:** `runtime_critical`
  - **Launch:** `sso`
  - **Status:** `active`

## 3. Service APIs & Embeddable Features
Services that expose APIs for data transfer, or provide UI components that are embedded (via iframe or module).

- **Metabase** (`metabase`)
  - **Purpose:** Analytics and BI capability
  - **Type:** `service_api`
  - **Criticality:** `feature_dependent`
  - **Launch:** `embed`
  - **Status:** `active`
- **Odoo** (`odoo`)
  - **Purpose:** ERP/application capability reference
  - **Type:** `service_api`
  - **Criticality:** `feature_dependent`
  - **Launch:** `none`
  - **Status:** `active`
- **N8N** (`n8n`)
  - **Purpose:** Automation and workflow orchestration
  - **Type:** `service_api`
  - **Criticality:** `feature_dependent`
  - **Launch:** `none`
  - **Status:** `active`
- **Ballerine** (`ballerine`)
  - **Purpose:** KYC/compliance workflow capability
  - **Type:** `service_api`
  - **Criticality:** `feature_dependent`
  - **Launch:** `embed`
  - **Status:** `active`
- **Easy Appointments** (`easy_appointments`)
  - **Purpose:** Appointment scheduling capability
  - **Type:** `service_api`
  - **Criticality:** `feature_dependent`
  - **Launch:** `embed`
  - **Status:** `active`
- **Chaskiq** (`chaskiq`)
  - **Purpose:** Customer messaging / support capability
  - **Type:** `embedded_module`
  - **Criticality:** `feature_dependent`
  - **Launch:** `embed`
  - **Status:** `active`

*(Planned/Pending Service APIs: OpenBB, Marble, Hi.Events, Docspell, Fleetbase)*

## 4. References & Documentation
Repositories used for architecture patterns, examples, or future roadmap targets. None of these execute directly in the primary runtime path yet.

- **Dolibarr** (`dolibarr`)
  - **Purpose:** ERP/operations capability reference
  - **Type:** `reference_only`
  - **Status:** `active`
- **Nexus** (`nexus`)
  - **Purpose:** Artifact repository management
  - **Type:** `reference_only`
  - **Status:** `active`

*(Planned/Reference Targets: Appsmith, Financial Freedom, Tirreno, KYC Check, Ghostfolio, Apache Fineract, Horilla, Postiz, Open Projects)*
