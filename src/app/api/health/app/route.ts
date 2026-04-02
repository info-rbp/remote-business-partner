import { NextResponse } from 'next/server';
import { Logger } from '@/lib/logger';

export async function GET() {
  const response = {
    status: 'ok',
    timestamp: new Date().toISOString(),
  };

  Logger.info('health', 'Application health check successful', { response });

  return NextResponse.json(response);
}
