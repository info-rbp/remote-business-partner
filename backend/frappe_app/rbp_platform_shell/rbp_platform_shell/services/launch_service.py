# rbp_platform_shell/services/launch_service.py
from rbp_platform_shell.launch.configurations import LAUNCH_CONFIGURATIONS
from rbp_platform_shell.launch.types import (
    LaunchReadinessResult,
    LaunchExecutionResult,
    RemediationAction,
    AvailabilityState
)
from typing import Dict, Any

class LaunchService:
    """
    This service is responsible for checking the readiness of a module
    and determining the final launch URL or action.
    It implements the logic defined in backend/models/launch_configuration.md.
    """

    def __init__(self, configurations: Dict[str, Any]):
        self._configurations = configurations

    def get_launch_config(self, object_key: str) -> Dict[str, Any] | None:
        """
        Loads a launch configuration by its object key.
        """
        return self._configurations.get(object_key)

    def evaluate_readiness(self, object_key: str, account_state: str = "active") -> LaunchReadinessResult:
        """
        Evaluates the readiness of a launchable object based on its configuration
        and basic inputs like account state.

        Returns a structured launch decision object.
        """
        config = self.get_launch_config(object_key)

        if not config:
            return LaunchReadinessResult(
                is_launchable=False,
                availability_state="inactive",
                reason_codes=["MISSING_CONFIGURATION"],
                remediation_actions=[],
            )

        # In a real engine, this would be a complex flow. Here, we simulate it.
        # Start with the config's default state.
        current_state: AvailabilityState = config["availability_state"]
        reason_codes = config["reason_codes"]
        remediation_actions = [RemediationAction(**action) for action in config["remediation_actions"]]

        # Simulate a dynamic check overriding the default state.
        if account_state == "billing_hold":
            current_state = "billing_hold"
            if "ACCOUNT_PAST_DUE" not in reason_codes:
                reason_codes.append("ACCOUNT_PAST_DUE")
                remediation_actions.append(RemediationAction(
                    action_key="UPDATE_PAYMENT_METHOD",
                    display_text="Update Billing Info",
                    target_url="/portal/billing"
                ))
        
        # Check for non-launchable methods
        if config["launch_method"] == "none":
            current_state = "pending" if current_state == "available" else current_state

        is_launchable = current_state == "available"

        return LaunchReadinessResult(
            is_launchable=is_launchable,
            availability_state=current_state,
            reason_codes=reason_codes,
            remediation_actions=remediation_actions,
        )
    
    def execute_launch(self, object_key: str) -> LaunchExecutionResult | None:
        """
        If an object is launchable, this method resolves the final launch parameters.
        """
        readiness = self.evaluate_readiness(object_key)
        if not readiness["is_launchable"]:
            return None

        config = self.get_launch_config(object_key)
        
        # This is where the target_resolution_metadata would be used to build the final URL.
        # For now, we'll use placeholder logic.
        target_url = config["target_resolution_metadata"].get("internal_route", "/#")
        
        if config["launch_method"] == "sso":
            # Simulate generating a temporary, secure SSO URL
            provider = config["target_resolution_metadata"].get("sso_provider")
            service_id = config["target_resolution_metadata"].get("partner_service_id")
            target_url = f"/api/method/sso/initiate?provider={provider}&service={service_id}"

        return LaunchExecutionResult(
            launch_method=config["launch_method"],
            target_url=target_url,
            open_in_new_window=config["open_in_new_window"],
            metadata=config["target_resolution_metadata"],
        )


# Singleton instance for easy access
launch_service = LaunchService(LAUNCH_CONFIGURATIONS)
