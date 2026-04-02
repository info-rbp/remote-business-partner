import { envSchema } from './schema';

const validatedEnv = envSchema.safeParse(process.env);

if (!validatedEnv.success) {
    console.error(
        '❌ Invalid environment variables:',
        validatedEnv.error.flatten().fieldErrors
    );
    throw new Error('Invalid environment variables.');
}

export const config = {
    /**
     * Server-side configuration.
     * Do not expose this object to the client.
     */
    server: {
        redisUrl: validatedEnv.data.PLATFORM_REDIS_URL,
        databaseUrl: validatedEnv.data.PLATFORM_DATABASE_URL,
        queueUrl: validatedEnv.data.PLATFORM_QUEUE_URL,
        integrations: {
            authentik: {
                apiUrl: validatedEnv.data.INTEGRATION_AUTHENTIK_API_URL,
                apiToken: validatedEnv.data.INTEGRATION_AUTHENTIK_API_TOKEN,
            },
            metabase: {
                apiUrl: validatedEnv.data.INTEGRATION_METABASE_API_URL,
                apiKey: validatedEnv.data.INTEGRATION_METABASE_API_KEY,
            },
            odoo: {
                apiUrl: validatedEnv.data.INTEGRATION_ODOO_API_URL,
                apiKey: validatedEnv.data.INTEGRATION_ODOO_API_KEY,
            },
            dolibarr: {
                apiUrl: validatedEnv.data.INTEGRATION_DOLIBARR_API_URL,
                apiKey: validatedEnv.data.INTEGRATION_DOLIBARR_API_KEY,
            },
        },
    },
    /**
     * Public configuration, safe to expose to the client.
     * This object is prefixed with NEXT_PUBLIC_.
     */
    public: {
        appUrl: validatedEnv.data.NEXT_PUBLIC_PLATFORM_APP_URL,
        features: {
            newDashboard: validatedEnv.data.NEXT_PUBLIC_FEATURE_NEW_DASHBOARD_ENABLED,
        },
    },
};
