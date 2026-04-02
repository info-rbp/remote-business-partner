
# Runtime Validation Checklist

This checklist provides a set of validation steps to ensure the runtime environment is correctly configured.

## Services

- [ ] **Workers:** Verify that the RQ workers are running and processing jobs.
  - `bench --site rbp.local worker --queue short,long,default`
- [ ] **Scheduler:** Verify that the bench scheduler is running.
  - `bench --site rbp.local schedule`
- [ ] **Realtime:** Verify that the Socket.io server is running and accessible.
  - `bench --site rbp.local serve --port 8000`

## File Handling

- [ ] **Public Files:** Verify that public files are accessible via the browser.
- [ ] **Private Files:** Verify that private files are only accessible to authenticated users.

## Application Baseline

- [ ] Verify that all required applications are installed and at the correct versions.
  - `bench --site rbp.local list-apps`
