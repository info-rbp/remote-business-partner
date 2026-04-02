'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function HelpPage() {
  return (
    <div className="flex flex-col gap-8 p-4 sm:p-6 lg:p-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Help Center</h1>
        <p className="text-muted-foreground">
          How can we help you?
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>
              Learn the basics of our platform.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button>View Guide</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>FAQ</CardTitle>
            <CardDescription>
              Find answers to frequently asked questions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button>View FAQ</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>
              Get in touch with our support team.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button>Contact Us</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
