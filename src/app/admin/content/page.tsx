
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function ContentPage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-bold">Content Management</h1>
                <p className="text-gray-500">Manage your public-facing website content.</p>
            </header>
            <Card>
                <CardHeader>
                    <CardTitle>Content</CardTitle>
                    <CardDescription>A list of all the content on your website.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Content management functionality will be implemented here.</p>
                </CardContent>
            </Card>
        </div>
    );
}
