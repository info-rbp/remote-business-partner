# Deployment and Operations Guide

This guide provides the necessary steps for building, deploying, and maintaining the platform. It is designed to be a living document that evolves with the application.

## 1. Deployment Checklist

This checklist should be followed for every manual deployment to a new or existing environment.

**CI Status:**
- [ ] Verify that the Continuous Integration (CI) pipeline for the target commit is passing on the `main` branch.

**Environment Configuration:**
- [ ] Ensure the target environment has a correctly populated `.env.local` file. This file must contain all variables defined in `.env.example` with the correct values for the target environment (staging, production, etc.).
- [ ] Double-check all `INTEGRATION_*` and `PLATFORM_*` URLs and secrets.

**Build & Deployment:**
- [ ] Run `npm run build` on the server to generate a production-optimized build in the `.next` directory.
- [ ] The application is served using a process manager (like PM2 or systemd) that runs `npm run start`.

## 2. Runtime Restart Procedure

Restarting the application is a common operation after deploying new code or updating configuration.

**Safe Restart Steps:**

1.  **Check for Ongoing Tasks:** Before restarting, ensure there are no critical background jobs running that cannot be safely interrupted. *(Note: As of now, all jobs are managed by the Frappe backend, which has its own lifecycle.)*
2.  **Use a Process Manager:** It is highly recommended to use a process manager like PM2 (`pm2 restart <app_name>`) or systemd (`sudo systemctl restart <service_name>`) to manage the application lifecycle. These tools ensure that the application is restarted gracefully and brought back online automatically.
3.  **Verify Service:** After the restart command is issued, check the application logs (`pm2 logs <app_name>`) and make a test request to the application's health check endpoint (once implemented) or main URL to ensure it has started successfully.

## 3. Repository Update Strategy

The `main` branch is the source of truth. To support future automated or semi-automated weekly PR syncs from an upstream repository, the following process is recommended:

1.  **Dedicated Upstream Remote:** Add the upstream repository as a remote (e.g., `git remote add upstream <upstream_repo_url>`).
2.  **Fetch and Merge:** Regularly fetch changes from the upstream `main` branch.
3.  **Controlled Merges:** Create a local branch from the `main` branch, merge the upstream changes into it, resolve any conflicts, and then open a Pull Request back to the `main` branch. This ensures that all changes from the upstream repository are reviewed and validated by the CI pipeline before being integrated.

This process isolates upstream changes and allows for controlled integration, preventing direct pushes from breaking the main branch.
