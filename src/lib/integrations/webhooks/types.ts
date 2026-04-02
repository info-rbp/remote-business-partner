/**
 * A standard envelope for incoming webhook events.
 */
export interface WebhookEvent<T> {
    sourceService: string;
    eventType: string;
    payload: T;
    timestamp: string;
    verificationSignature?: string; // For validating the webhook's authenticity
}
