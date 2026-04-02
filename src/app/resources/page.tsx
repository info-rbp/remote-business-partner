'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ResourcesPage() {
    const resources = [
        { id: 1, title: 'Blog Post', description: 'Read our latest blog post on industry trends.' },
        { id: 2, title: 'Case Study', description: 'See how our platform helped a client succeed.' },
        { id: 3, title: 'Webinar', description: 'Watch our webinar on remote work best practices.' },
    ];

  return (
    <div className="flex flex-col gap-8 p-4 sm:p-6 lg:p-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Resources</h1>
        <p className="text-muted-foreground">
          Explore our collection of helpful resources.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
            <Card key={resource.id}>
                <CardHeader>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>
                        {resource.description}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button>Read More</Button>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}
