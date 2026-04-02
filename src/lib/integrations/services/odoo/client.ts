import { IntegrationError } from '@/lib/integrations/core/errors';

// Odoo uses JSON-RPC, which is a bit different from a standard REST API.
// This client is a lightweight wrapper for that protocol.

interface JsonRpcRequest {
  jsonrpc: '2.0';
  method: 'call';
  params: any;
  id: number;
}

interface JsonRpcResponse<T> {
  jsonrpc: '2.0';
  result?: T;
  error?: { 
    code: number; 
    message: string; 
    data: any; 
  };
  id: number;
}

export class OdooClient {
  private readonly baseUrl: string;
  private readonly db: string;
  private sessionId: string | null = null;

  constructor(baseUrl: string, db: string) {
    if (!baseUrl || !db) {
      throw new IntegrationError('Odoo client is not configured. Base URL and database name are required.', 'Odoo', false);
    }
    this.baseUrl = baseUrl;
    this.db = db;
  }

  private async makeRpcRequest<T>(path: string, params: any): Promise<T> {
    const payload: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'call',
      params,
      id: Math.floor(Math.random() * 1000000000),
    };

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new IntegrationError(`Odoo RPC request failed with status ${response.status}`, 'Odoo', response.status >= 500, { downstreamError: response.status });
    }

    const json = await response.json() as JsonRpcResponse<T>;

    if (json.error) {
      throw new IntegrationError(`Odoo RPC Error: ${json.error.message}`, 'Odoo', false, { downstreamError: json.error });
    }

    return json.result as T;
  }

  /**
   * Authenticates with Odoo to get a session ID.
   */
  async connect(username: string, password: string): Promise<number> {
    const uid = await this.makeRpcRequest<number>('/jsonrpc', {
      service: 'common',
      method: 'login',
      args: [this.db, username, password, {}],
    });
    // The session is managed by cookies, not a token to store.
    return uid;
  }
  
  /**
   * Checks the health of the Odoo instance (server version).
   */
  async checkHealth(): Promise<{ server_version: string }> {
    return this.makeRpcRequest<{ server_version: string }>('/jsonrpc', {
      service: 'common',
      method: 'version',
      args: [],
    });
  }

  /**
   * Placeholder for a representative service action.
   * For example, searching for a partner.
   */
  async findPartner(name: string): Promise<any[]> {
    return this.makeRpcRequest<any[]>('/jsonrpc', {
      service: 'object',
      method: 'execute_kw',
      args: [this.db, /* uid */, /* password */, 'res.partner', 'search_read', [[['name', '=', name]]]],
    });
  }
}
