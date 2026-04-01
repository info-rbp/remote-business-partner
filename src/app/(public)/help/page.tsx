
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HelpPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Help & Support</h1>
      <p className="mb-8">We're here to help. Find the answers to your questions below.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Find answers to common questions about our platform.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Browse our FAQ to find the information you need.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>Can't find the answer you're looking for?</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Our support team is available to assist you. Please visit our <a href="/contact" className="text-blue-500">contact page</a>.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
