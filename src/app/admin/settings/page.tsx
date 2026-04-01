
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function SettingsPage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-bold">Settings</h1>
                <p className="text-gray-500">Manage your settings.</p>
            </header>
            <Card>
                <CardHeader>
                    <CardTitle>Settings</CardTitle>
                    <CardDescription>A list of all the settings.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Settings functionality will be implemented here.</p>
                </CardContent>
            </Card>
        </div>
    );
}
