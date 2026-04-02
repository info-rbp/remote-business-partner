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

export default function ApplicationsPage() {
    const applications = [
        { id: 1, name: 'Sales Module', status: 'active', version: '1.2.0' },
        { id: 2, name: 'Support Module', status: 'inactive', version: '1.0.0' },
        { id: 3, name: 'Marketing Module', status: 'active', version: '2.0.0' },
    ];

  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-bold">Applications Management</h1>
        <p className="text-muted-foreground">
          Manage your applications here.
        </p>
      </header>
      <Card>
        <CardHeader>
          <CardTitle>Applications</CardTitle>
          <CardDescription>
            A list of all the applications.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Version</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium">{app.name}</TableCell>
                  <TableCell>
                    <Badge variant={app.status === 'active' ? 'default' : 'secondary'}>
                      {app.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{app.version}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                        Edit
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
