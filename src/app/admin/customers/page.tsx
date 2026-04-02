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
import { StateBadge } from '@/components/feedback/StateBadge';
import { AccountState } from '@/lib/state';

export default function CustomersPage() {
    const customers = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', plan: 'Pro', status: AccountState.Active },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', plan: 'Basic', status: AccountState.Active },
        { id: 3, name: 'Peter Jones', email: 'peter.jones@example.com', plan: 'Enterprise', status: AccountState.Suspended },
    ];

  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-bold">Customers Management</h1>
        <p className="text-muted-foreground">
          Manage your customers here.
        </p>
      </header>
      <Card>
        <CardHeader>
          <CardTitle>Customers</CardTitle>
          <CardDescription>
            A list of all the customers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.plan}</TableCell>
                  <TableCell>
                    <StateBadge state={customer.status} />
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
