# Environment and Security Checklist

This checklist should be used by developers and AI agents before and during development to ensure compliance with the project's baseline for environment and security hygiene.

## Environment

- [ ] **Environment Isolation:** Am I working in the correct environment (`local/dev`, `staging`, or `production`)?
- [ ] **Data Separation:** Is the data I am using appropriate for the current environment? (No production data in `local/dev` or `staging`).
- [ ] **Configuration:** Are all service endpoints and configurations (e.g., API URLs) loaded from environment-specific variables?
- [ ] **Dependencies:** Are all dependencies and services I am interacting with also in the correct environment?

## Secrets

- [ ] **No Hardcoded Secrets:** Have I checked my code for any hardcoded API keys, passwords, or other credentials?
- [ ] **Use Environment Variables:** Are all secrets being loaded from environment variables?
- [ ] **No Secrets in Frontend:** Have I ensured that no backend-only secrets are exposed to the Next.js application (i.e., not prefixed with `NEXT_PUBLIC_`)?
- [ ] **`.gitignore`:** Is the `.env` file (or any file containing local secrets) included in `.gitignore`?

## Exposure Control

- [ ] **No Raw URLs:** Does the user-facing UI contain any raw repository URLs or direct links to internal admin consoles?
- [ ] **Governed Launches:** Is every user-initiated "launch" of an application or service handled by a backend API call?
- [ ] **No Backend Logic in Frontend:** Have I avoided implementing any security-sensitive logic (e.g., permission checks, entitlement decisions) in the frontend code?
- [ ] **API Authorization:** Does every API endpoint that accesses or modifies sensitive data have proper backend authorization checks?

## Code Hygiene

- [ ] **Linting:** Have I run `npm run lint -- --fix` to check for code quality and security issues?
- [ ] **Dependencies:** Are all third-party dependencies up-to-date and free from known vulnerabilities?
- [ ] **Peer Review:** Has my code been reviewed by another developer or AI agent to check for potential security risks?
