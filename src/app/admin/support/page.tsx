'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function SupportPage() {
    const tickets = [
        { id: 1, subject: 'Cannot Access Module', user: 'John Doe', status: 'open' },
        { id: 2, subject: 'Billing Inquiry', user: 'Jane Smith', status: 'in_progress' },
        { id: 3, subject: 'Feature Request', user: 'Peter Jones', status: 'resolved' },
    ];

  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-bold">Support Management</h1>
        <p className="text-muted-foreground">
          Manage your support tickets here.
        </p>
      </header>
      <Card>
        <CardHeader>
          <CardTitle>Support Tickets</CardTitle>
          <CardDescription>
            A list of all the support tickets.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell className="font-medium">{ticket.subject}</TableCell>
                  <TableCell>{ticket.user}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        ticket.status === 'open'
                          ? 'destructive'
                          : ticket.status === 'in_progress'
                          ? 'secondary'
                          : 'default'
                      }
                    >
                      {ticket.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                        View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
