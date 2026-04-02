import { NextResponse } from 'next/server';
import type { RecordCreationResponse } from '@/lib/validation/types';

// IMPORTANT: This is a mock API endpoint for validation purposes.
// It does not interact with a real backend.

export async function POST() {
  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const response: RecordCreationResponse = {
    success: true,
    recordId: `PROJ-${Math.floor(100 + Math.random() * 900)}`,
    message: 'Project record created successfully in the platform layer.',
  };

  return NextResponse.json(response);
}
