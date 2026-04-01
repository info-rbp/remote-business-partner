
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function SupportPage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-bold">Support Management</h1>
                <p className="text-gray-500">Manage your support tickets.</p>
            </header>
            <Card>
                <CardHeader>
                    <CardTitle>Support</CardTitle>
                    <CardDescription>A list of all the support tickets.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Support management functionality will be implemented here.</p>
                </CardContent>
            </Card>
        </div>
    );
}
