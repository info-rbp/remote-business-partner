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

export default function AuditPage() {
    const logs = [
        { id: 1, user: 'John Doe', action: 'Updated user profile', timestamp: '2024-07-30T10:00:00Z' },
        { id: 2, user: 'Jane Smith', action: 'Created a new support ticket', timestamp: '2024-07-29T14:30:00Z' },
        { id: 3, user: 'Peter Jones', action: 'Resolved a support ticket', timestamp: '2024-07-28T12:00:00Z' },
    ];

  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-bold">Audit Trail</h1>
        <p className="text-muted-foreground">
          View the audit trail here.
        </p>
      </header>
      <Card>
        <CardHeader>
          <CardTitle>Logs</CardTitle>
          <CardDescription>
            A list of all the audit logs.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Timestamp</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-medium">{log.user}</TableCell>
                  <TableCell>{log.action}</TableCell>
                  <TableCell>{new Date(log.timestamp).toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
