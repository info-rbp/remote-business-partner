import { ServiceAuth } from './auth';

/**
 * A standard envelope for API requests to ensure consistency.
 */
export interface ApiRequest<T> {
    payload: T;
    auth: ServiceAuth;
    idempotencyKey?: string;
}

/**
 * A standard envelope for API responses.
 */
export interface ApiResponse<T> {
    success: boolean;
    data: T;
    error?: {
        message: string;
        code: string;
    };
}

/**
 * Represents the result of a data synchronization operation.
 */
export interface SyncResult {
    service: string;
    status: 'success' | 'failed';
    recordsSynced: number;
    lastSyncTimestamp: string;
}

/**
 * Represents a request to launch or initiate an external service interaction.
 */
export interface LaunchRequest {
    service: string;
    target: string; // e.g., a specific dashboard, report, or resource
    userContext: any;
}

/**
 * Represents the response from a launch request, often containing a URL or token.
 */
export interface LaunchResponse {
    service: string;
    launchUrl?: string;
    sessionToken?: string;
    status: 'success' | 'failed';
}

/**
 * A standardized model for reporting the health of an external service.
 */
export interface HealthStatus {
    service: string;
    isHealthy: boolean;
    checkedAt: string;
}

/**
 * A detailed status model for a specific integration.
 */
export interface IntegrationStatus extends HealthStatus {
    lastSync?: SyncResult;
    authStatus: 'configured' | 'unconfigured' | 'failed';
}
