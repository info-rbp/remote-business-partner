import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const auditLogs = [
  { action: "Plan Updated", entity: "Premium Membership", user: "system.admin@example.com", timestamp: "10 mins ago" },
  { action: "Refund Processed", entity: "Inv-2023-011", user: "finance.admin@example.com", timestamp: "1 hour ago" },
  { action: "App Configuration Changed", entity: "Sales Hub", user: "platform.ops@example.com", timestamp: "3 hours ago" },
];

export default function AuditPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold">Audit Trails</h1>
        <p className="text-gray-500">View logs of significant administrative actions across the platform.</p>
      </header>
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity Logs</CardTitle>
          <CardDescription>A chronological record of sensitive operations and configuration changes.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Action</TableHead>
                <TableHead>Entity/Target</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Timestamp</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {auditLogs.map((log, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{log.action}</TableCell>
                  <TableCell>{log.entity}</TableCell>
                  <TableCell>{log.user}</TableCell>
                  <TableCell className="text-gray-500">{log.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}