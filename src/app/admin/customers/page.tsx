
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function CustomersPage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-bold">Customers Management</h1>
                <p className="text-gray-500">Manage your customers.</p>
            </header>
            <Card>
                <CardHeader>
                    <CardTitle>Customers</CardTitle>
                    <CardDescription>A list of all the customers.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Customers management functionality will be implemented here.</p>
                </CardContent>
            </Card>
        </div>
    );
}
