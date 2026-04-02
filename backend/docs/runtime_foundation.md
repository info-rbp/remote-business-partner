# Backend Runtime Foundation

This document records the authoritative backend runtime foundation for the Remote Business Partner project.

## Authoritative Bench Path

The authoritative backend runtime is located at:

```
rbp-bench/rbp-bench
```

This is the inner bench, not the outer bench wrapper.

## Active Site

The active site for this project is:

```
rbp.localhost
```

## Expected Installed Apps Baseline

The expected baseline of installed Frappe apps is documented in `backend/runtime/installed_apps.json`.

## Runtime Ownership Boundary

The backend runtime is a distinct environment from the frontend workspace. The Firebase Studio environment is for frontend development and hosting only. The backend runtime is managed separately.

## **WARNING**

Do not treat the outer bench wrapper or the Firebase Studio environment as the active backend runtime. All backend operations, including `bench` commands, must be executed within the authoritative bench path specified above.
