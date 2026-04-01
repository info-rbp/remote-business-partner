
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ClientDashboardPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Client Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Active Membership</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Your current plan: Premium</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Available Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <p>You have access to 5 applications.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Purchases</CardTitle>
          </CardHeader>
          <CardContent>
            <p>3 recent purchases.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
