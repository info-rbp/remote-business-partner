export interface SupportTicket {
    id: string;
    subject: string;
    status: 'open' | 'in_progress' | 'resolved';
    lastUpdated: string;
  }
  
  export const mockSupportTickets: SupportTicket[] = [
    {
      id: 'TICKET-001',
      subject: 'Unable to launch Sales module',
      status: 'open',
      lastUpdated: '2024-07-30T10:00:00Z',
    },
    {
      id: 'TICKET-002',
      subject: 'Billing question about last invoice',
      status: 'in_progress',
      lastUpdated: '2024-07-29T14:30:00Z',
    },
    {
      id: 'TICKET-003',
      subject: 'How to add a new team member?',
      status: 'resolved',
      lastUpdated: '2024-07-28T18:00:00Z',
    },
  ];
  