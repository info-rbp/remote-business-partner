import { z } from 'zod';

/**
 * Server-side environment variables schema.
 * These are NOT exposed to the browser and are only available in the Node.js environment.
 */
export const serverSchema = z.object({
  APP_SECRET: z.string().min(1, 'APP_SECRET is required'),
  REDIS_URL: z.string().url('REDIS_URL must be a valid URL'),
  QUEUE_REDIS_URL: z.string().url('QUEUE_REDIS_URL must be a valid URL'),

  // Integrations - Backend Only
  INTEGRATION_AUTHENTIK_BASE_URL: z.string().url(),
  INTEGRATION_AUTHENTIK_API_TOKEN: z.string().min(1),
  INTEGRATION_METABASE_BASE_URL: z.string().url(),
  INTEGRATION_METABASE_USERNAME: z.string().min(1),
  INTEGRATION_METABASE_PASSWORD: z.string().min(1),
  INTEGRATION_ODOO_BASE_URL: z.string().url(),
  INTEGRATION_ODOO_DB_NAME: z.string().min(1),
  INTEGRATION_ODOO_USERNAME: z.string().min(1),
  INTEGRATION_ODOO_PASSWORD: z.string().min(1),
  INTEGRATION_DOLIBARR_BASE_URL: z.string().url(),
  INTEGRATION_DOLIBARR_API_KEY: z.string().min(1),
});

/**
 * Client-side environment variables schema.
 * These variables MUST be prefixed with NEXT_PUBLIC_ to be exposed to the browser.
 */
export const clientSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url('NEXT_PUBLIC_APP_URL must be a valid URL'),
  NEXT_PUBLIC_FEATURE_FLAG_ENABLE_NEW_DASHBOARD: z.enum(['true', 'false']).default('false'),
});
