
# External Repository Integration

This directory contains the metadata for external repositories that are integrated with the Remote Business Partner platform.

## `repos.manifest.json`

This file contains a high-level manifest of external repositories. It is used for ecosystem awareness and not as a source of runtime truth.

## `repository-metadata.ts`

This file contains the detailed metadata for each external repository. It implements the `ExternalRepository` interface defined in `src/lib/external/types.ts`.

### Integration Classifications

- **`reference_only`**: The repository is used for informational purposes only. No code is integrated.
- **`service_api`**: The repository a service that the application consumes via an API.
- **`embedded_module`**: The repository contains a module that is embedded within the application.
- **`sso_target`**: The repository represents an application that is a target for single sign-on.
- **`runtime_adjacent`**: The repository is a critical part of the runtime, but not directly integrated into the codebase.

### Launch Classifications

- **`none`**: The repository is not directly launchable from the application.
- **`native`**: The repository is a native part of the application.
- **`embed`**: The repository is embedded within the application (e.g., in an iframe).
- **`sso`**: The repository is accessed via single sign-on.
- **`redirect`**: The application redirects the user to the external repository.

### Runtime Classifications

- **`runtime_critical`**: The application cannot function without this repository.
- **`feature_dependent`**: A specific feature of the application depends on this repository.
- **`non_critical`**: The application can function without this repository.
