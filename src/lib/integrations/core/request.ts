import { IntegrationError } from './errors';
import type { ServiceAuth } from './auth';

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: any;
}

/**
 * A standardized wrapper for making fetch requests to external services.
 * It handles authentication, error wrapping, and JSON parsing.
 *
 * @param baseUrl The base URL of the service endpoint.
 * @param auth The authentication credentials for the service.
 * @param path The specific API path to request.
 * @param options Fetch options (method, body, etc.).
 * @returns The JSON response from the service.
 * @throws {IntegrationError} if the request fails or returns a non-2xx status.
 */
export async function makeRequest<T>(
  baseUrl: string,
  auth: ServiceAuth,
  path: string,
  options: RequestOptions = {}
): Promise<T> {
  const url = `${baseUrl.replace(/\/$/, '')}${path}`;
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // Add authentication headers based on the auth type
  if (auth.type === 'api-token') {
    headers['Authorization'] = `Bearer ${auth.token}`;
  } else if (auth.type === 'dolapikey') {
    headers['DOLAPIKEY'] = auth.apiKey;
  } else if (auth.type === 'metabase-session') {
    headers['X-Metabase-Session'] = auth.sessionId;
  }
  // Odoo uses a session_id in the request body for JSON-RPC, handled in the client.

  try {
    const response = await fetch(url, {
      method: options.method || 'GET',
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    if (!response.ok) {
      throw new IntegrationError(`API request failed with status ${response.status}: ${response.statusText}`,
        {
          service: new URL(url).hostname,
          statusCode: response.status,
          isRetryable: response.status >= 500,
        }
      );
    }

    return await response.json() as T;

  } catch (error) {
    if (error instanceof IntegrationError) {
      throw error;
    }
    throw new IntegrationError(`Network or unexpected error occurred: ${error.message}`,
      {
        service: new URL(url).hostname,
        isRetryable: true, // Network errors are often transient
      }
    );
  }
}
