
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ClientMembershipPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">My Membership</h1>
      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-semibold">Premium Plan</p>
          <p className="text-gray-500">Billed monthly, renews on July 30, 2024</p>
          <div className="mt-4">
            <h3 className="font-semibold">Inclusions:</h3>
            <ul className="list-disc list-inside">
              <li>Access to all applications</li>
              <li>Premium DocuShare content</li>
              <li>Priority support</li>
            </ul>
          </div>
          <div className="mt-6">
            <Button>Upgrade/Downgrade Plan</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
