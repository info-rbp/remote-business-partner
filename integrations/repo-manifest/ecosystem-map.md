
# Ecosystem Map and Dependency Mapping

This document outlines how each external repository is intended to be used within the Remote Business Partner platform.

| Repository | Integration Type      | Runtime Classification | Launch Classification | Description                                                                 |
|------------|-----------------------|------------------------|-----------------------|-----------------------------------------------------------------------------|
| Dolibarr   | `reference_only`      | `non_critical`         | `none`                | ERP/operations capability reference. Not currently integrated.              |
| Metabase   | `embedded_module`     | `feature_dependent`    | `embed`               | Analytics and BI capability. To be embedded for reporting.                  |
| RBP Core   | `runtime_adjacent`    | `runtime_critical`     | `native`              | Custom platform shell and control plane. A core part of the runtime.        |
| Odoo       | `reference_only`      | `non_critical`         | `none`                | ERP/application capability reference. Not currently integrated.             |
| Authentik  | `sso_target`          | `runtime_critical`     | `sso`                 | Identity and access management. Provides authentication for the platform. |

