import { SupportTicket } from './types';

export const mockSupportTickets: SupportTicket[] = [
  {
    id: 'TICKET-001',
    subject: 'Cannot Access Module',
    status: 'open',
    lastUpdated: '2024-07-30T10:00:00Z',
  },
  {
    id: 'TICKET-002',
    subject: 'Billing Inquiry',
    status: 'in_progress',
    lastUpdated: '2024-07-29T14:30:00Z',
  },
  {
    id: 'TICKET-003',
    subject: 'Feature Request',
    status: 'resolved',
    lastUpdated: '2024-07-28T12:00:00Z',
  },
];
