import { makeRequest } from '@/lib/integrations/core/request';
import { IntegrationError } from '@/lib/integrations/core/errors';
import type { DolApiKeyAuth } from '@/lib/integrations/core/auth';

export class DolibarrClient {
  private readonly baseUrl: string;
  private readonly auth: DolApiKeyAuth;

  constructor(baseUrl: string, apiKey: string) {
    if (!baseUrl || !apiKey) {
      throw new IntegrationError('Dolibarr client is not configured. Base URL and API key are required.', { service: 'Dolibarr' });
    }
    this.baseUrl = baseUrl;
    this.auth = { type: 'dolapikey', apiKey };
  }

  /**
   * Checks the health/status of the Dolibarr API.
   */
  async checkHealth(): Promise<any> {
    return this.getStatus();
  }

  /**
   * Verifies the client's configuration by fetching the system status.
   */
  async verifyConfig(): Promise<any> {
    // Retries are not suitable for auth errors (4xx).
    return this.getStatus();
  }

  /**
   * Retrieves the status of the Dolibarr instance.
   */
  async getStatus(): Promise<any> {
    return makeRequest(this.baseUrl, this.auth, '/status');
  }

  /**
   * Placeholder for a representative service action.
   * For example, getting a list of third parties.
   */
  async getThirdParties(): Promise<any[]> {
    // Retries are suitable for 5xx errors.
    return makeRequest<any[]>(this.baseUrl, this.auth, '/thirdparties');
  }
}
