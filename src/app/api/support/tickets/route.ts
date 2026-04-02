import { apiResponse } from '@/lib/api';
import { mockSupportTickets } from '@/services/mock-data/support';
import { SupportTicket } from '@/lib/types';

export async function GET() {
  // TODO: Replace this with real backend integration.
  // The backend would fetch the support tickets for the authenticated user
  // from a database or a third-party service.
  const mockData: SupportTicket[] = mockSupportTickets;

  return apiResponse(true, mockData, null, 200);
}
