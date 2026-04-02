
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Restricted from "@/components/feedback/Restricted";
import Pending from "@/components/feedback/Pending";
import Hold from "@/components/feedback/Hold";

export default function HomePage() {
  return (
    <div className="container mx-auto p-8">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-gray-800">Welcome to Our Platform</h1>
        <p className="text-xl text-gray-600 mt-4">The all-in-one solution for your business needs.</p>
        <div className="mt-8">
          <Button size="lg">Get Started</Button>
        </div>
      </section>

      {/* Feedback Components Showcase */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Status & Feedback Patterns</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Restricted Access</h3>
            <Restricted message="You do not have permission to view this content." />
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Pending Action</h3>
            <Pending message="Your request is pending approval." />
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Action on Hold</h3>
            <Hold message="This action is temporarily on hold." />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Feature One</CardTitle>
              <CardDescription>Description of the first amazing feature.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>More details about what makes this feature so great.</p>
            </CardContent>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Two</CardTitle>
              <CardDescription>Description of the second amazing feature.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>More details about what makes this feature so great.</p>
            </CardContent>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Three</CardTitle>
              <CardDescription>Description of the third amazing feature.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>More details about what makes this feature so great.</p>
            </CardContent>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
