'use client';

import { useState, useEffect } from 'react';
import { SupportTicket } from '@/lib/mock-support-data';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const getBadgeVariant = (status: 'open' | 'in_progress' | 'resolved') => {
    switch (status) {
        case 'open':
            return 'secondary';
        case 'in_progress':
            return 'default';
        case 'resolved':
            return 'outline';
    }
};

export default function SupportPage() {
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('/api/support/tickets');
        if (!response.ok) {
          throw new Error('Failed to fetch support tickets');
        }
        const data = await response.json();
        setTickets(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Support Tickets</h1>
      <Card>
        <CardHeader>
          <CardTitle>Your Support Requests</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading && <p>Loading tickets...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!isLoading && !error && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticket ID</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Updated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tickets.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell>{ticket.id}</TableCell>
                    <TableCell>{ticket.subject}</TableCell>
                    <TableCell>
                        <Badge variant={getBadgeVariant(ticket.status)}>{ticket.status.replace(/_/g, ' ')}</Badge>
                    </TableCell>
                    <TableCell>{new Date(ticket.lastUpdated).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}