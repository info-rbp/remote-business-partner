type LogLevel = 'INFO' | 'WARN' | 'ERROR';

export type LogCategory = 
  | 'auth' 
  | 'launch' 
  | 'integrations' 
  | 'runtime' 
  | 'support'
  | 'validation'
  | 'health';

/**
 * A placeholder for a future external error monitoring service like Sentry, Datadog, etc.
 * It is called automatically by the Logger.error method.
 * @param category The category of the error.
 * @param error The error object.
 * @param context Additional context for the error.
 */
function reportErrorToExternalService(category: LogCategory, error: any, context: Record<string, any> = {}) {
  // In a real implementation, you would send this data to your monitoring service.
  // For now, we just log it to the console with extra emphasis.
  console.error('\n--- EXTERNAL ERROR REPORT ---');
  console.error(`Category: ${category}`);
  console.error('Error: ', error);
  console.error('Context: ', JSON.stringify(context, null, 2));
  console.error('---------------------------\n');
}

function log(level: LogLevel, category: LogCategory, message: string, context: Record<string, any> = {}) {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    level,
    category,
    message,
    ...context,
  };

  // Use console.log for INFO, console.warn for WARN, and console.error for ERROR
  switch (level) {
    case 'INFO':
      console.log(JSON.stringify(logEntry, null, 2));
      break;
    case 'WARN':
      console.warn(JSON.stringify(logEntry, null, 2));
      break;
    case 'ERROR':
      console.error(JSON.stringify(logEntry, null, 2));
      // Automatically report errors to the external service adapter
      if (context.error) {
        reportErrorToExternalService(category, context.error, context);
      }
      break;
  }
}

export const Logger = {
  info: (category: LogCategory, message: string, context?: Record<string, any>) => 
    log('INFO', category, message, context),
  warn: (category: LogCategory, message: string, context?: Record<string, any>) => 
    log('WARN', category, message, context),
  error: (category: LogCategory, message: string, context: { error: any } & Record<string, any>) => 
    log('ERROR', category, message, context),
};
