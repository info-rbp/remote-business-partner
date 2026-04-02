import { NextResponse } from 'next/server';
import type { SyncStatusResponse } from '@/lib/validation/types';

// IMPORTANT: This is a mock API endpoint for validation purposes.

export async function GET(request: Request, { params }: { params: { id: string } }) {
  await new Promise(resolve => setTimeout(resolve, 500));

  const response: SyncStatusResponse = {
    success: true,
    recordId: params.id,
    status: 'Synced',
    message: `Record ${params.id} has been successfully synced to Odoo.`,
  };

  return NextResponse.json(response);
}
