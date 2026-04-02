import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, FileText, User } from "lucide-react";
import Link from "next/link";
import { ROUTES } from "@/routes";
import { StateNotice } from "@/components/feedback/StateNotice";
import { AccountState } from "@/lib/state";

const quickStats = [
  { title: "Active Applications", value: "3", icon: <Activity className="h-6 w-6 text-blue-500" /> },
  { title: "Upcoming Invoice", value: "$49.99", icon: <FileText className="h-6 w-6 text-green-500" /> },
  { title: "Team Members", value: "5", icon: <User className="h-6 w-6 text-purple-500" /> },
];

const recentActivities = [
  { description: "New user registered: john.doe@example.com", timestamp: "2 hours ago" },
  { description: "Subscription for 'Pro Plan' was renewed.", timestamp: "1 day ago" },
  { description: "Invoice #INV-2023-001 was paid.", timestamp: "2 days ago" },
];

const quickLinks = [
    { label: ROUTES.portal.membership.name, href: ROUTES.portal.membership.path },
    { label: ROUTES.portal.billing.name, href: ROUTES.portal.billing.path },
    { label: ROUTES.portal.profile.name, href: ROUTES.portal.profile.path },
    { label: ROUTES.portal.team.name, href: ROUTES.portal.team.path },
]

export default function DashboardPage() {
  const accountState = AccountState.BillingHold; // Mock state for demonstration

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <header className="flex items-center justify-between">
        <div>
            <h1 className="text-2xl font-bold">Welcome back, Alex!</h1>
            <p className="text-gray-500">Here&apos;s a snapshot of your account.</p>
        </div>
      </header>

      {/* Account State Notice */}
      <StateNotice 
        state={accountState} 
        remediationLink={ROUTES.portal.billing.path} 
        remediationText="Update payment method" 
      />

      {/* Quick Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {quickStats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                {stat.icon}
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
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
             <CardDescription>Quickly access common actions.</CardDescription>
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
