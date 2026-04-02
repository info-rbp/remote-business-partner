"""Top-level package shim for the rbp_platform_shell app.

This repository uses a Frappe-style nested layout:

backend/frappe_app/rbp_platform_shell/
    __init__.py
    rbp_platform_shell/
        services/
        tests/
        ...

When tests run from the repository root, Python imports this outer package first.
This shim extends the package path so imports like
`rbp_platform_shell.services.launch_service` resolve correctly.
"""

from pathlib import Path
from pkgutil import extend_path

__version__ = "0.0.1"

# Start with the standard package path
__path__ = extend_path(__path__, __name__)

# Append the inner implementation package
_inner_pkg = Path(__file__).resolve().parent / "rbp_platform_shell"
if _inner_pkg.is_dir():
    inner_pkg_str = str(_inner_pkg)
    if inner_pkg_str not in __path__:
        __path__.append(inner_pkg_str)