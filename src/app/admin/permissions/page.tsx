
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function PermissionsPage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-bold">Permissions Management</h1>
                <p className="text-gray-500">Manage your permissions.</p>
            </header>
            <Card>
                <CardHeader>
                    <CardTitle>Permissions</CardTitle>
                    <CardDescription>A list of all the permissions.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Permissions management functionality will be implemented here.</p>
                </CardContent>
            </Card>
        </div>
    );
}
