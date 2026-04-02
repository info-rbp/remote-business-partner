import { serverSchema, clientSchema } from './schema';

// A helper function to parse and format Zod errors for clarity.
function formatErrors(errors: any) {
  return Object.entries(errors)
    .map(([key, value]) => `- ${key}: ${(value as any)._errors.join(', ')}`)
    .join('\n');
}

// Validate server-side variables
const serverResult = serverSchema.safeParse(process.env);
if (!serverResult.success) {
  console.error('\n❌ Invalid server-side environment variables:\n');
  console.error(formatErrors(serverResult.error.format()));
  process.exit(1);
}

// Validate client-side variables
const clientResult = clientSchema.safeParse(process.env);
if (!clientResult.success) {
  console.error('\n❌ Invalid client-side environment variables:\n');
  console.error(formatErrors(clientResult.error.format()));
  process.exit(1);
}

/**
 * The single, validated source of truth for all environment configuration.
 * - `config.server` contains backend-only variables.
 * - `config.client` contains frontend-safe variables.
 */
export const config = {
  server: serverResult.data,
  client: clientResult.data,
};

// Type definitions for convenience
export type ServerConfig = typeof config.server;
export type ClientConfig = typeof config.client;
