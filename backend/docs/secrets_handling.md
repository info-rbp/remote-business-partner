# Secrets Handling and Sensitive Configuration

This document outlines the baseline rules for managing secrets and sensitive configuration in the project.

## 1. Secret Ownership and Storage

*   **Backend Owns All Secrets:** The Frappe backend is the sole owner and manager of all secrets, including API keys, database credentials, and third-party service credentials.
*   **No Secrets in Frontend:** The frontend (Next.js application) **must never** store or have direct access to any secrets. The Git repository must not contain any credentials.
*   **Use Environment Variables:** Secrets must be loaded into the backend runtime via environment variables. For local development, this is managed via a `.env` file that is listed in `.gitignore`. For staging and production, secrets are injected by the hosting environment or a dedicated secrets management service.

## 2. Frontend-Safe vs. Backend-Only Values

A clear distinction must be maintained between configuration values that are safe for the frontend and those that are not.

### a. Frontend-Safe Values

These are values that are safe to expose in the browser. They are typically public identifiers, not secrets.

*   **Examples:**
    *   Public API endpoint URLs (e.g., `https://api.example.com/v1`).
    *   Public keys for services like Stripe or Google Analytics.
    *   Feature flags that control UI elements.
*   **Usage:** These values can be exposed to the Next.js application via environment variables prefixed with `NEXT_PUBLIC_`.

### b. Backend-Only Values (Secrets)

These are sensitive values that **must never** be exposed in the frontend.

*   **Examples:**
    *   API secrets and private keys.
    *   Database connection strings.
    *   Admin passwords or tokens.
    *   Encryption keys.
*   **Usage:** These values are loaded directly into the backend runtime and are never passed to the client-side. The frontend interacts with services that use these secrets only through governed backend APIs.

## 3. Service Credential Handling

*   All credentials for third-party services (e.g., payment gateways, email services) are managed as `External Service` records in the backend's Integration Registry.
*   The credentials themselves will be stored securely (e.g., encrypted in the database or managed via a dedicated secrets service) and accessed only by the backend at runtime.
*   The frontend will never have direct access to these credentials. It will make API calls to the backend, which will then use the credentials to interact with the third-party service.
