
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function AuditPage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-bold">Audit Log</h1>
                <p className="text-gray-500">View your audit log.</p>
            </header>
            <Card>
                <CardHeader>
                    <CardTitle>Audit Log</CardTitle>
                    <CardDescription>A list of all the audit log.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Audit log functionality will be implemented here.</p>
                </CardContent>
            </Card>
        </div>
    );
}
