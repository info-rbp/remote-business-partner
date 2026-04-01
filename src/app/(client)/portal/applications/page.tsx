
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ClientApplicationsPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">My Applications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Application One</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Access Status: Active</p>
            <Button className="mt-4">Launch</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Application Two</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Access Status: Pending</p>
            <Button className="mt-4" disabled>Launch</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
