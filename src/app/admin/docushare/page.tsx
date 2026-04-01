
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function DocuSharePage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-bold">DocuShare Management</h1>
                <p className="text-gray-500">Manage your DocuShare files and folders.</p>
            </header>
            <Card>
                <CardHeader>
                    <CardTitle>DocuShare</CardTitle>
                    <CardDescription>A list of all the files and folders in your DocuShare.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>DocuShare management functionality will be implemented here.</p>
                </CardContent>
            </Card>
        </div>
    );
}
