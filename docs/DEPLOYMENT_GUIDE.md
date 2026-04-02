# Deployment Guide

This guide outlines the process for deploying the Remote Business Partner platform.

## CI Validation: The Quality Gate

The project includes a Continuous Integration (CI) pipeline defined in `.github/workflows/ci.yml`. This pipeline serves as a critical quality gate and runs on every push and pull request to the `main` branch.

### What CI Validates:

*   **Repository Integrity:** It proves that a clean checkout of the repository contains all necessary files to build the project.
*   **Dependency Installation:** It ensures that all `npm` packages can be installed deterministically using `npm ci`.
*   **Configuration Schema:** It validates that the placeholder values in `.env.example` satisfy the application's configuration schema (`src/config/schema.ts`).
*   **Code Quality:** It runs `npm run lint` to enforce a consistent code style.
*   **Production Build:** It runs `npm run build` to confirm that the Next.js application can be successfully compiled for a production environment.

**A green CI check is a mandatory prerequisite for any deployment.** It confirms the code is in a deployable *state*, but it is not a deployment itself.

### What CI Does NOT Validate:

*   **Production Secrets:** The CI pipeline **does not** have access to, or knowledge of, any real production secrets. It only uses the safe placeholder values from `.env.example`.
*   **Service Connectivity:** The pipeline does not attempt to connect to any external services (databases, Redis, external APIs). The build process is self-contained.

## Manual Deployment Steps

Deployment is currently a manual process. After a pull request is merged (with a green CI check), you can proceed with these steps on your hosting provider (e.g., a VM, Vercel, etc.).

1.  **Get Latest Code:**
    ```bash
    git pull origin main
    ```

2.  **Provide Production Configuration:**
    Create a `.env` file on your server. Copy the contents of `.env.example` and replace **all** placeholder values with your actual production secrets and endpoints.

3.  **Build and Run the Application:**
    ```bash
    # Install dependencies
    npm ci

    # Build for production
    npm run build

    # Start the server
    npm start
    ```

This will start the Next.js application in production mode, listening on the configured port.
