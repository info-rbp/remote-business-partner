
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ClientSupportPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Support and Help</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Submit a Ticket</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Have an issue? Our support team is here to help.</p>
            <Button className="mt-4">Submit a Ticket</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Issue History</CardTitle>
          </CardHeader>
          <CardContent>
            <p>View your past and current support tickets.</p>
            <Button className="mt-4">View History</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
