# Repo Manifest: How to Use in Firebase Studio

This guide explains how to use the corrected repository manifest inside the `remote-business-partner` repository so Firebase Studio can understand the wider application ecosystem without storing every external codebase inside the main repo.

The active development runtime remains the **inner bench** at `rbp-bench/rbp-bench/`, not the outer wrapper bench. Treat that inner bench as authoritative for backend/runtime truth. fileciteturn7file0

## 1. What this manifest is for

The manifest provides a single machine-readable list of the repositories used by the application, including:

- internal references hosted under `info-rbp`
- external public repositories
- the Frappe foundation already available in the active bench/runtime

It should be used for:

- Firebase Studio workspace awareness
- integration planning
- repo sync/update tooling
- launch model and dependency documentation
- future containerized sync services
- onboarding new developers or AI-assisted workspaces

It should not be used as a substitute for backend truth, entitlement logic, payment logic, or platform state.

## 2. Where to put the files

Place the manifest and this guide in the main project repository here:

```text
remote-business-partner/
└── integration/
    └── repo-manifest/
        ├── repos.manifest.json
        └── README.md
        ├── ecosystem-map.md
        └── ecosystem-map.json
```

Recommended convention:

- `repos.manifest.json` = machine-readable source
- `README.md` = human-readable usage guide
- `ecosystem-map.md` = structured, human-readable map of the ecosystem
- `ecosystem-map.json` = structured, machine-readable map of the ecosystem

## 3. Repository list covered by the manifest

The corrected manifest references these repositories:

1. Dolibarr
2. Frappe (already available, no external link required)
3. Metabase
4. Core (`rbp_core`)
5. Odoo
6. Authentik
7. N8N
8. Appsmith
9. Ballerine
10. Easy Appointments
11. OpenBB
12. Marble
13. Hi.Events
14. Docspell
15. Fleetbase
16. Financial Freedom
17. Tirreno
18. Chaskiq
19. KYC Check
20. Nexus
21. Ghostfolio
22. Apache Fineract
23. Horilla
24. Postiz
25. Open Projects

## 4. Recommended treatment of repositories

### Default rule
Use reference mode for most repositories.

That means:
- keep them out of the main repo
- document them in the manifest
- fetch them only when needed
- let the frontend and integration layers know they exist without importing all source code

### Special case
Use submodule-candidate treatment only for repositories that directly affect platform logic and need close source adjacency.

Current recommendation:
- `rbp_core`

### Frappe handling
Frappe is already available in the active bench/runtime and does not need an external URL entry in the same way as the others.

## 5. How Firebase Studio should use the manifest

When Firebase Studio imports the main `remote-business-partner` repository, the manifest should be treated as:

- the inventory of external dependencies and related systems
- a guide for later repo fetch/sync actions
- a way to keep the workspace aware of the full system shape
- input for future integration tooling or Cloud Run sync containers

Firebase Studio should not automatically clone every repository just because it appears in the manifest.

## 6. Suggested workflow

### Workflow A: day-to-day frontend work
Use the main repo only:

- `blueprint/`
- `frontend/`
- `integration/`
- `infrastructure/`
- `docs/`

Read the manifest for awareness only.

### Workflow B: focused integration work
When you need one referenced repo:
1. identify it in `repos.manifest.json`
2. clone it separately into a temporary or dedicated workspace
3. inspect or modify it there
4. feed changes back through the correct repository lifecycle

### Workflow C: future automation
Later, a sync service or Cloud Run job can:
- read `repos.manifest.json`
- pull specific repos on demand or on schedule
- extract metadata
- update normalized platform integration records

## 7. Example of how to read an entry

Each repository entry includes:
- `name`
- `key`
- `url`
- `type`
- `purpose`
- `notes`

Example uses:
- show supported systems in docs or admin screens
- drive a repo sync job
- map repos to launch models or modules
- identify which repos are reference-only vs close-integration candidates

## 8. What not to do

Do not:
- copy all referenced repos into the main `remote-business-partner` repo
- use Git submodules for everything
- treat Firebase Studio as the backend runtime
- let the manifest become the source of business truth
- point the frontend directly at raw repository URLs for user-facing launches

## 9. When to add a repository

Add a new repository when:
- it is part of the intended platform/application ecosystem
- it materially affects a module, launch path, or integration
- it needs to be tracked for future sync/update work

When adding one, update both:
- `repos.manifest.json`
- this README if the usage guidance changes

## 10. Copy-and-paste setup steps

### Add the folder
```bash
mkdir -p integration/repo-manifest
```

### Copy the files into place
```bash
cp repos.manifest.json integration/repo-manifest/repos.manifest.json
cp repo-manifest-how-to-use.md integration/repo-manifest/README.md
```

### Commit them
```bash
git add integration/repo-manifest/repos.manifest.json integration/repo-manifest/README.md
git commit -m "Add corrected repository manifest for external application references"
```

## 11. Best-practice summary

The best long-term setup is:

- main repo for product code, contracts, infrastructure, and docs
- repo manifest for the wider external application ecosystem
- separate workspaces or targeted clones for deep repo work
- containerized sync/update tooling later if automated repo awareness is needed

That keeps Firebase Studio fast, keeps the main repo clean, and still gives the project a complete reference map of the applications it depends on.
