
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function AnalyticsPage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-bold">Analytics</h1>
                <p className="text-gray-500">View your analytics.</p>
            </header>
            <Card>
                <CardHeader>
                    <CardTitle>Analytics</CardTitle>
                    <CardDescription>A list of all the analytics.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Analytics functionality will be implemented here.</p>
                </CardContent>
            </Card>
        </div>
    );
}
