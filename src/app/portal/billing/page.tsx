
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";

const subscriptions = [
    { name: "Premium Plan", status: "Active", price: "$99.99/month", nextBilling: "December 1, 2023" }
];

const purchaseHistory = [
    { id: "P-001", item: "DocuShare Pro Template", date: "October 15, 2023", amount: "$29.99" },
];

const invoices = [
    { id: "INV-2023-001", date: "November 1, 2023", amount: "$99.99", status: "Paid" },
    { id: "INV-2023-002", date: "October 1, 2023", amount: "$99.99", status: "Paid" },
];

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold">Billing</h1>
        <p className="text-gray-500">Manage your subscriptions, view purchase history, and access your invoices.</p>
      </header>

      {/* Subscriptions */}
      <Card>
        <CardHeader>
          <CardTitle>Subscriptions</CardTitle>
          <CardDescription>Your active and past subscription plans.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Next Billing Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subscriptions.map((sub) => (
                <TableRow key={sub.name}>
                  <TableCell className="font-medium">{sub.name}</TableCell>
                  <TableCell>
                    <Badge variant={sub.status === 'Active' ? 'default' : 'secondary'}>
                      {sub.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{sub.price}</TableCell>
                  <TableCell>{sub.nextBilling}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      {/* Purchase History */}
      <Card>
        <CardHeader>
          <CardTitle>Purchase History</CardTitle>
          <CardDescription>A record of your one-off purchases.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Item</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {purchaseHistory.map((purchase) => (
                <TableRow key={purchase.id}>
                  <TableCell>{purchase.id}</TableCell>
                  <TableCell>{purchase.item}</TableCell>
                  <TableCell>{purchase.date}</TableCell>
                  <TableCell>{purchase.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Invoices */}
      <Card>
        <CardHeader>
          <CardTitle>Invoices</CardTitle>
          <CardDescription>Access and download your past invoices.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>{invoice.id}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>
                     <Badge variant={invoice.status === 'Paid' ? 'default' : 'destructive'}>
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
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
