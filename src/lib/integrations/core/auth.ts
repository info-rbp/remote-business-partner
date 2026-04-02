/**
 * Defines the authentication strategy for an external service.
 */
export type AuthStrategy = 'api-key' | 'oauth2' | 'jwt' | 'none';

/**
 * A generic container for service authentication credentials.
 * The specific properties will vary based on the strategy.
 */
export interface ServiceAuth {
    strategy: AuthStrategy;
    credentials: {
        apiKey?: string;
        bearerToken?: string;
        clientId?: string;
        clientSecret?: string;
        // Other credentials as needed
    };
}
