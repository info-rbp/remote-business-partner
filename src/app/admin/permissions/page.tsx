import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const permissions = [
  { role: "Platform Administrator", accessLevel: "Full System", status: "Active" },
  { role: "Content Administrator", accessLevel: "Website Content & Assets", status: "Active" },
  { role: "Commerce Administrator", accessLevel: "Billing & Offers", status: "Active" },
  { role: "Support Administrator", accessLevel: "Tickets & Customer State", status: "Active" }
];

export default function PermissionsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold">Roles & Permissions</h1>
        <p className="text-gray-500">Manage internal admin roles and capability bands.</p>
      </header>
      <Card>
        <CardHeader>
          <CardTitle>Configured Roles</CardTitle>
          <CardDescription>Roles control what actions administrators can take within the system.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Role Group</TableHead>
                <TableHead>Access Level / Band</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {permissions.map(p => (
                <TableRow key={p.role}>
                  <TableCell className="font-medium">{p.role}</TableCell>
                  <TableCell>{p.accessLevel}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{p.status}</Badge>
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