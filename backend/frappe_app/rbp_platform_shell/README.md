# Backend Implementation Note

This directory, `backend/frappe_app/rbp_platform_shell`, serves as the Frappe-compatible backend implementation scaffold for the Remote Business Partner platform.

## Scaffold Origin

This structure was newly created because no existing Frappe app path (e.g., `rbp_core`) was found within the repository. It is designed to be a standard, self-contained Frappe application.

## Mapping to Inner Bench

This scaffold is intended to be installed as an app into the active "inner bench" Frappe runtime. During development or deployment, the following command would be used from within the Frappe bench directory:

```bash
bench get-app <path_to_this_repo>/backend/frappe_app
bench install-app rbp_platform_shell
```

This will link the app into the bench, allowing its DocTypes, APIs, and services to be recognized and used by the Frappe framework.

## Purpose of Artifacts

The files and directories within this scaffold are **implementation artifacts**, not documentation. They contain the Python code, DocType definitions (as JSON), and other configurations that will run on the server to power the platform shell's logic, including entitlements, module launching, and state management.
