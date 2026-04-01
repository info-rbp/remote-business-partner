
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function SubscriptionPage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-bold">Subscription</h1>
                <p className="text-gray-500">Manage your subscription and billing details.</p>
            </header>
            <Card>
                <CardHeader>
                    <CardTitle>Subscription</CardTitle>
                    <CardDescription>Your current subscription plan.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Subscription management functionality will be implemented here.</p>
                </CardContent>
            </Card>
        </div>
    );
}
