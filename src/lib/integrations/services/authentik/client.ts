import { makeRequest } from '@/lib/integrations/core/request';
import { IntegrationError } from '@/lib/integrations/core/errors';
import type { ServiceAuth } from '@/lib/integrations/core/auth';
import type { AuthentikUser } from './types';

export class AuthentikClient {
  private readonly baseUrl: string;
  private readonly auth: ServiceAuth;

  constructor(baseUrl: string, token: string) {
    if (!baseUrl || !token) {
      throw new IntegrationError('Authentik client is not configured. Base URL and token are required.', 'Authentik', false);
    }
    this.baseUrl = baseUrl;
    this.auth = { type: 'bearer', token };
  }

  /**
   * Checks the health of the Authentik API.
   * Assumes a standard /healthz or similar endpoint.
   */
  async checkHealth(): Promise<{ status: string }> {
    // Placeholder: This assumes an endpoint like /api/v3/core/health/
    // Retries are suitable for 5xx errors.
    return makeRequest<{ status: string }>(this.baseUrl, this.auth, '/api/v3/core/health/');
  }

  /**
   * Verifies the client's configuration by fetching the current user.
   */
  async verifyConfig(): Promise<AuthentikUser> {
    return this.getCurrentUser();
  }

  /**
   * Retrieves the user associated with the API token.
   */
  async getCurrentUser(): Promise<AuthentikUser> {
    // Retries are not suitable for auth errors (4xx).
    return makeRequest<AuthentikUser>(this.baseUrl, this.auth, '/api/v3/core/users/me/');
  }
}
