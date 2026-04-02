/**
 * Defines the authentication strategy for an external service.
 */
export type AuthStrategy = 'api-key' | 'bearer' | 'basic' | 'session' | 'custom' | 'none';

/**
 * A generic container for service authentication credentials.
 * The specific properties will vary based on the strategy.
 */
export interface ServiceAuth {
    type: AuthStrategy;
    token?: string;
    apiKey?: string;
    sessionId?: string;
    username?: string;
    password?: string;
    customHeader?: { key: string, value: string };
}
