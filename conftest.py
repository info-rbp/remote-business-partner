from pathlib import Path
import sys

# Force the Frappe app root onto sys.path before pytest collects any tests.
REPO_ROOT = Path(__file__).resolve().parent
APP_ROOT = REPO_ROOT / "backend" / "frappe_app" / "rbp_platform_shell"

app_root_str = str(APP_ROOT)
if app_root_str not in sys.path:
    sys.path.insert(0, app_root_str)

# Eager import to prove the package path is valid during collection.
import rbp_platform_shell  # noqa: E402,F401
import rbp_platform_shell.services  # noqa: E402,F401