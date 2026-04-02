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
  if (auth.type === 'bearer' && auth.token) {
    headers['Authorization'] = `Bearer ${auth.token}`;
  } else if (auth.type === 'custom' && auth.customHeader) {
    headers[auth.customHeader.key] = auth.customHeader.value;
  } else if (auth.type === 'session' && auth.sessionId) {
    headers['X-Metabase-Session'] = auth.sessionId;
  }
  // Basic and API-Key strategies can be added here if needed

  try {
    const response = await fetch(url, {
      method: options.method || 'GET',
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    if (!response.ok) {
      throw new IntegrationError(`API request failed with status ${response.status}: ${response.statusText}`,
        new URL(url).hostname,
        response.status >= 500,
        {
          downstreamError: response.status,
        }
      );
    }

    return await response.json() as T;

  } catch (error) {
    if (error instanceof IntegrationError) {
      throw error;
    }
    const message = error instanceof Error ? error.message : String(error);
    throw new IntegrationError(`Network or unexpected error occurred: ${message}`,
      new URL(url).hostname,
      true // Network errors are often transient
    );
  }
}
