/**
 * Custom error class for integration-specific issues.
 */
export class IntegrationError extends Error {
    service: string;
    isRetryable: boolean;
    idempotencyKey?: string;
    downstreamError?: any;

    constructor(
        message: string,
        service: string,
        isRetryable: boolean,
        options: { idempotencyKey?: string; downstreamError?: any } = {}
    ) {
        super(message);
        this.name = 'IntegrationError';
        this.service = service;
        this.isRetryable = isRetryable;
        this.idempotencyKey = options.idempotencyKey;
        this.downstreamError = options.downstreamError;

        // This maintains a proper stack trace in V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, IntegrationError);
        }
    }
}
