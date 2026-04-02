import { makeRequest } from '@/lib/integrations/core/request';
import { IntegrationError } from '@/lib/integrations/core/errors';
import type { MetabaseSessionAuth } from '@/lib/integrations/core/auth';
import type { MetabaseSession, MetabaseHealth } from './types';

export class MetabaseClient {
  private readonly baseUrl: string;
  private auth: MetabaseSessionAuth | null = null;

  constructor(baseUrl: string) {
    if (!baseUrl) {
      throw new IntegrationError('Metabase client is not configured. Base URL is required.', { service: 'Metabase' });
    }
    this.baseUrl = baseUrl;
  }

  /**
   * Authenticates with Metabase to get a session token.
   * This must be called before any other method.
   */
  async connect(username: string, password: string): Promise<void> {
    const response = await makeRequest<MetabaseSession>(
      this.baseUrl,
      { type: 'unauthenticated' }, // No auth needed for the auth endpoint itself
      '/api/session',
      {
        method: 'POST',
        body: { username, password },
      }
    );
    this.auth = { type: 'metabase-session', sessionId: response.id };
  }

  private getAuth(): MetabaseSessionAuth {
    if (!this.auth) {
      throw new IntegrationError('Metabase client is not authenticated. Call connect() first.', { service: 'Metabase' });
    }
    return this.auth;
  }

  /**
   * Checks the health of the Metabase API.
   */
  async checkHealth(): Promise<MetabaseHealth> {
    // This endpoint typically requires no authentication.
    return makeRequest<MetabaseHealth>(this.baseUrl, { type: 'unauthenticated' }, '/api/health');
  }

  /**
   * Verifies the configuration by attempting to get the current user session.
   */
  async verifyConfig(): Promise<any> {
    // Retries are not suitable for auth errors (4xx).
    return makeRequest(this.baseUrl, this.getAuth(), '/api/user/current');
  }
}
