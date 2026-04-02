import { z } from 'zod';

const serverSchema = z.object({
    // Platform
    PLATFORM_REDIS_URL: z.string().url(),
    PLATFORM_DATABASE_URL: z.string().url(),
    PLATFORM_QUEUE_URL: z.string().url(),

    // Integrations
    INTEGRATION_AUTHENTIK_API_URL: z.string().url(),
    INTEGRATION_AUTHENTIK_API_TOKEN: z.string(),
    INTEGRATION_METABASE_API_URL: z.string().url(),
    INTEGRATION_METABASE_API_KEY: z.string(),
    INTEGRATION_ODOO_API_URL: z.string().url(),
    INTEGRATION_ODOO_API_KEY: z.string(),
    INTEGRATION_DOLIBARR_API_URL: z.string().url(),
    INTEGRATION_DOLIBARR_API_KEY: z.string(),
});

const clientSchema = z.object({
    NEXT_PUBLIC_PLATFORM_APP_URL: z.string().url(),
    NEXT_PUBLIC_FEATURE_NEW_DASHBOARD_ENABLED: z.string().transform(val => val === 'true'),
});

/**
 * A merged schema for all environment variables.
 */
export const envSchema = serverSchema.merge(clientSchema);
