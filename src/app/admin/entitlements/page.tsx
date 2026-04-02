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

export default function EntitlementsPage() {
    const entitlements = [
        { id: 1, name: 'Basic Access', description: 'Access to basic features' },
        { id: 2, name: 'Pro Access', description: 'Access to pro features' },
        { id: 3, name: 'Enterprise Access', description: 'Access to all features' },
    ];

  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-bold">Entitlements Management</h1>
        <p className="text-muted-foreground">
          Manage user entitlements here.
        </p>
      </header>
      <Card>
        <CardHeader>
          <CardTitle>Entitlements</CardTitle>
          <CardDescription>
            A list of all the entitlements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {entitlements.map((entitlement) => (
                <TableRow key={entitlement.id}>
                  <TableCell className="font-medium">{entitlement.name}</TableCell>
                  <TableCell>{entitlement.description}</TableCell>
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
