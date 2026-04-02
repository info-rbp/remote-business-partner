import { NextResponse } from 'next/server';
import { mockSupportTickets } from '@/lib/mock-support-data';

export async function GET() {
  // In a real application, you would fetch tickets for the authenticated user
  return NextResponse.json(mockSupportTickets);
}
