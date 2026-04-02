
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ResourcesPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Resources</h1>
      <p className="mb-8">Explore our library of helpful guides, articles, and tutorials.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started Guide</CardTitle>
            <CardDescription>A comprehensive guide to help you get started with our platform.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Learn the basics and set up your account in minutes.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>API Documentation</CardTitle>
            <CardDescription>Detailed documentation for our powerful API.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Integrate our services with your own applications.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Blog</CardTitle>
            <CardDescription>Stay up-to-date with the latest news, updates, and industry insights.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Read our latest articles and learn from our experts.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
