from pathlib import Path
import sys

# Ensure the Frappe app root is importable during pytest collection.
#
# Repository layout:
# backend/frappe_app/rbp_platform_shell/
#   rbp_platform_shell/
#     services/
#     tests/
#
# We need `backend/frappe_app/rbp_platform_shell` on sys.path so imports like
# `rbp_platform_shell.services.launch_service` resolve consistently under pytest.
APP_ROOT = Path(__file__).resolve().parents[2]

app_root_str = str(APP_ROOT)
if app_root_str not in sys.path:
    sys.path.insert(0, app_root_str)

# Force early import so pytest collection uses the correct package root.
import rbp_platform_shell  # noqa: E402,F401
import rbp_platform_shell.services  # noqa: E402,F401