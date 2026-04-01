
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ApplicationsPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Our Applications</h1>
      <p className="mb-8">Explore our suite of applications designed to streamline your business operations.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Application One</CardTitle>
            <CardDescription>A powerful tool for managing customer relationships.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Integrate seamlessly with your existing workflows and boost productivity.</p>
          </CardContent>
          <CardFooter>
            <Button>Learn More</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Application Two</CardTitle>
            <CardDescription>Simplify your financial management and accounting.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Track expenses, manage invoices, and generate insightful reports.</p>
          </CardContent>
          <CardFooter>
            <Button>Learn More</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Application Three</CardTitle>
            <CardDescription>Enhance your team's collaboration and communication.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Share files, manage tasks, and stay connected with your team.</p>
          </CardContent>
          <CardFooter>
            <Button>Learn More</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
