
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function MembershipsPage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-bold">Memberships Management</h1>
                <p className="text-gray-500">Manage your membership plans.</p>
            </header>
            <Card>
                <CardHeader>
                    <CardTitle>Memberships</CardTitle>
                    <CardDescription>A list of all the membership plans.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Memberships management functionality will be implemented here.</p>
                </CardContent>
            </Card>
        </div>
    );
}
