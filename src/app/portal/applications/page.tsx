
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Lock, Zap } from "lucide-react";
import Link from "next/link";

const applications = [
    {
        name: "Sales Hub",
        description: "Manage your sales pipeline, track leads, and close deals.",
        status: "active",
        href: "/app/modules/sales"
    },
    {
        name: "Customer Support Desk",
        description: "Provide exceptional support to your customers with our integrated helpdesk.",
        status: "active",
        href: "/app/modules/support"
    },
    {
        name: "Lending Orchestration",
        description: "Automate and streamline your entire lending lifecycle.",
        status: "locked",
        href: "/portal/membership"
    },
    {
        name: "Advanced Insights",
        description: "Gain deep insights into your business with our advanced analytics module.",
        status: "locked",
        href: "/portal/membership"
    }
];

export default function ApplicationsPage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-bold">Applications</h1>
                <p className="text-gray-500">Launch your available applications or manage your access.</p>
            </header>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {applications.map(app => (
                    <Card key={app.name} className="flex flex-col">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle>{app.name}</CardTitle>
                                {app.status === 'active' ? <Zap className="h-6 w-6 text-green-500" /> : <Lock className="h-6 w-6 text-gray-400" />}
                            </div>
                            <CardDescription>{app.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1" />
                        <div className="p-6">
                            <Link href={app.href} passHref>
                                <Button className="w-full">
                                    {app.status === 'active' ? <><Rocket className="mr-2 h-4 w-4" /> Launch</> : "Upgrade to Access"}
                                </Button>
                            </Link>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
