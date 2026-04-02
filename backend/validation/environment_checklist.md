# Backend Environment Validation Checklist

This checklist is used to validate the health and configuration of the backend environment.

## Scheduler
- [ ] Scheduler is running
- [ ] `bench doctor` shows scheduler is healthy
- [ ] Scheduled jobs are being executed

## Workers
- [ ] `bench worker --list` shows the expected number of workers
- [ ] Workers are processing jobs from the queue
- [ ] No stale or failing jobs in the queue

## Realtime/Socket Layer
- [ ] `frappe-socketio` is running
- [ ] Realtime events are being broadcast and received by clients
- [ ] No errors in the `socketio.log`

## File Handling/Storage
- [ ] Public files are accessible via the browser
- [ ] Private files are accessible to authorized users
- [ ] File uploads and downloads are working correctly

## Site Responsiveness
- [ ] Site is accessible via the browser
- [ ] API endpoints are responding in a timely manner
- [ ] Desk and web UI are loading without errors

## Site Config Validation
- [ ] `site_config.json` contains the correct database credentials
- [ ] `developer_mode` is enabled
- [ ] `CORS` is configured correctly
- [ ] `host_name` is set to the correct domain
