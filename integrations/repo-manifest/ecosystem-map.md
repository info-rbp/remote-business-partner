# Repository Ecosystem Map

This document provides a structured and normalized view of the repository ecosystem for the Remote Business Partner platform. It is derived from the `repos.manifest.json` and serves as a planning and integration guide.

| Key | Name | Type | Module Family | User Surface | Launch Pattern | Lifecycle Stage | Runtime Criticality | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `frappe` | Frappe | available-in-bench | Platform | Admin/API | API-Only | Active Integration | Runtime-Critical | The core backend framework. Not directly launched by users. |
| `rbp_core` | Core | submodule-candidate | Platform | Admin/API | API-Only | Planned Integration | Close-Integration Candidate | Custom platform shell and control plane. A candidate for submodule integration. |
| `dolibarr` | Dolibarr | reference | Operations | Client | New Tab | Reference | Reference-Only | ERP/operations capability. |
| `metabase` | Metabase | reference | Analytics | Client/Admin | Embedded | Reference | Reference-Only | Analytics and BI capability. |
| `odoo` | Odoo | reference | Operations | Client | New Tab | Reference | Reference-Only | ERP/application capability. |
| `authentik` | Authentik | reference | Security | Admin/API | API-Only | Reference | Reference-Only | Identity and access management. |
| `n8n` | N8N | reference | Automation | Admin | New Tab | Reference | Reference-Only | Automation and workflow orchestration. |
| `appsmith` | Appsmith | reference | Tooling | Admin | New Tab | Reference | Internal Tool | Admin/internal tooling interface. Not for end-users. |
| `ballerine` | Ballerine | reference | Compliance | Client/Admin | Embedded | Reference | Reference-Only | KYC/compliance workflow capability. |
| `easy_appointments` | Easy Appointments | reference | Scheduling | Client | Embedded | Reference | Reference-Only | Appointment scheduling capability. |
| `openbb` | OpenBB | reference | Finance | Client | New Tab | Reference | Reference-Only | Financial and market intelligence capability. |
| `marble` | Marble | reference | Risk | Admin/API | API-Only | Reference | Reference-Only | Decisioning / risk workflow capability. |
| `hi_events` | Hi.Events | reference | Events | Client | New Tab | Reference | Reference-Only | Events and ticketing capability. |
| `docspell` | Docspell | reference | Documents | Client | New Tab | Reference | Reference-Only | Document management / ingestion capability. |
| `fleetbase` | Fleetbase | reference | Logistics | Client | New Tab | Reference | Reference-Only | Logistics / fleet operations capability. |
| `financial_freedom` | Financial Freedom | reference | Finance | Client | New Tab | Reference | Reference-Only | Finance education / advisory capability. |
| `tirreno` | Tirreno | reference | Specialist | Client | New Tab | Reference | Reference-Only | Specialist external capability. |
| `chaskiq` | Chaskiq | reference | Support | Client/Admin | Embedded | Reference | Reference-Only | Customer messaging / support capability. |
| `kyc_check` | KYC Check | reference | Compliance | Client | Embedded | Reference | Reference-Only | KYC verification UI/reference implementation. |
| `nexus` | Nexus | reference | Tooling | Admin | New Tab | Reference | Internal Tool | Artifact repository management. Not for end-users. |
| `ghostfolio` | Ghostfolio | reference | Finance | Client | New Tab | Reference | Reference-Only | Portfolio/investment tracking capability. |
| `apache_fineract` | Apache Fineract | reference | Finance | Client/API | API-Only | Reference | Reference-Only | Lending/core banking capability reference. |
| `horilla` | Horilla | reference | People | Client | New Tab | Reference | Reference-Only | HR and people operations capability. |
| `postiz` | Postiz | reference | Communications | Client | New Tab | Reference | Reference-Only | Social publishing / communications capability. |
| `openproject` | Open Projects | reference | Operations | Client | New Tab | Reference | Reference-Only | Project and work management capability. |
