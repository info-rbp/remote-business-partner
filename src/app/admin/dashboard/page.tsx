
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, FileText, Bell, BarChart, Settings, HelpCircle, User, Clock } from "lucide-react";
import Link from "next/link";

const kpiCards = [
    { title: "Total Customers", value: "1,250", icon: <Users className="h-6 w-6 text-blue-500" />, change: "+12% from last month" },
    { title: "Pending Approvals", value: "15", icon: <Clock className="h-6 w-6 text-yellow-500" />, change: "+5 since last hour" },
    { title: "Open Support Tickets", value: "28", icon: <HelpCircle className="h-6 w-6 text-red-500" />, change: "3 new tickets" },
    { title: "Total Revenue", value: "$98,500", icon: <BarChart className="h-6 w-6 text-green-500" />, change: "+8% from last month" },
];

const recentActivities = [
  { description: "Admin user 'john.doe' approved a new membership application.", timestamp: "15 minutes ago" },
  { description: "A new customer account was created for 'jane.smith@example.com'.", timestamp: "1 hour ago" },
  { description: "A new support ticket was opened regarding a billing issue.", timestamp: "3 hours ago" },
  { description: "Content for the public homepage was updated.", timestamp: "1 day ago" },
];

const quickLinks = [
    { label: "Manage Customers", href: "/admin/customers" },
    { label: "Manage Memberships", href: "/admin/memberships" },
    { label: "View Support Tickets", href: "/admin/support" },
    { label: "View Audit Logs", href: "/admin/audit" },
]

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-500">An overview of the platform's status and activities.</p>
      </header>

      {/* KPI Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {kpiCards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                {card.icon}
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-gray-500">{card.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Admin Activity</CardTitle>
             <CardDescription>A log of recent administrative actions.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="divide-y divide-gray-200">
              {recentActivities.map((activity, index) => (
                <li key={index} className="py-3">
                  <p className="text-sm">{activity.description}</p>
                  <p className="text-xs text-gray-500">{activity.timestamp}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
            <CardDescription>Quickly jump to common admin tasks.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
             {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} passHref>
                    <Button variant="outline" className="w-full justify-start text-left">
                        {link.label}
                    </Button>
                </Link>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
