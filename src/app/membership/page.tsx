
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MembershipPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Membership Plans</h1>
      <p className="mb-8">Choose the plan that's right for you and unlock exclusive benefits.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Basic Plan</CardTitle>
            <CardDescription>For individuals and small teams getting started.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$10<span className="text-sm font-normal">/month</span></p>
            <ul className="mt-4 space-y-2">
              <li>Feature A</li>
              <li>Feature B</li>
              <li>Feature C</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button>Choose Plan</Button>
          </CardFooter>
        </Card>
        <Card className="border-blue-500">
          <CardHeader>
            <CardTitle>Pro Plan</CardTitle>
            <CardDescription>For growing businesses that need more power and flexibility.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$50<span className="text-sm font-normal">/month</span></p>
            <ul className="mt-4 space-y-2">
              <li>All features in Basic</li>
              <li>Feature D</li>
              <li>Feature E</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button>Choose Plan</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Enterprise Plan</CardTitle>
            <CardDescription>For large organizations with custom needs.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">Contact Us</p>
            <ul className="mt-4 space-y-2">
              <li>All features in Pro</li>
              <li>Dedicated Support</li>
              <li>Custom Integrations</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button>Contact Sales</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
