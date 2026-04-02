
# Runtime Foundation

This document defines the authoritative runtime environment for the Remote Business Partner platform.

## Authoritative Runtime

- **Bench Path:** `rbp-bench/rbp-bench`
- **Active Site:** `rbp.local`

All development, testing, and integration activities must target the inner bench at `rbp-bench/rbp-bench` and the `rbp.local` site.

The outer bench wrapper is a development dependency and MUST NOT be treated as the active runtime.

## Configuration Drift

Configuration drift between the inner and outer benches has been identified as a key risk. The following configurations must be consistent with the authoritative runtime:

- Redis
- Workers
- Realtime (Socket.io)
- Background Jobs (RQ)
- Site Configuration

## Legacy Bench References

All references to the outer bench should be considered legacy and removed or updated to point to the authoritative inner bench. Any remaining references must be documented with a clear deprecation path.
