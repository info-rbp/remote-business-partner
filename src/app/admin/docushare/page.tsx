import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Empty from "@/components/feedback/Empty";

export default function DocuSharePage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-bold">DocuShare Management</h1>
                <p className="text-gray-500">Manage your DocuShare files and folders.</p>
            </header>
            <Card>
                <CardHeader>
                    <CardTitle>DocuShare Assets</CardTitle>
                    <CardDescription>A list of all the files and folders published via DocuShare.</CardDescription>
                </CardHeader>
                <CardContent>
                    {/* Visual implementation of an empty state in the Admin UI */}
                    <Empty message="No DocuShare products or assets have been configured yet." />
                </CardContent>
            </Card>
        </div>
    );
}