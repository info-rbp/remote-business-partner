import { NextResponse } from 'next/server';
import { Logger } from '@/lib/logger';

// IMPORTANT: This is a mock health check for integrations.
// In a real system, this would involve checking the actual health of each service.

interface IntegrationStatus {
  name: string;
  status: 'healthy' | 'unhealthy' | 'degraded';
  message?: string;
}

// This status would typically be maintained by the backend based on real-time checks.
// Here we are mocking it.
const mockIntegrationStatuses: IntegrationStatus[] = [
  {
    name: 'Frappe Backend',
    status: 'healthy',
  },
  {
    name: 'Odoo Connector',
    status: 'healthy',
  },
  {
    name: 'Metabase Analytics',
    status: 'degraded',
    message: 'Response times are higher than normal.',
  },
];

export async function GET() {
  const overallStatus = mockIntegrationStatuses.every(s => s.status === 'healthy')
    ? 'healthy'
    : 'degraded';

  const response = {
    status: overallStatus,
    timestamp: new Date().toISOString(),
    integrations: mockIntegrationStatuses,
  };

  if (overallStatus !== 'healthy') {
    Logger.warn('health', 'Integration health check reported issues', { response });
  } else {
    Logger.info('health', 'Integration health check successful', { response });
  }

  return NextResponse.json(response);
}
