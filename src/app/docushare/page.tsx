'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function DocuSharePage() {
    const documents = [
        { id: 1, title: 'User Manual', description: 'A comprehensive guide to using our platform.' },
        { id: 2, title: 'API Documentation', description: 'Learn how to integrate with our API.' },
        { id: 3, title: 'Marketing Brochure', description: 'Discover our latest marketing materials.' },
    ];

  return (
    <div className="flex flex-col gap-8 p-4 sm:p-6 lg:p-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold">DocuShare</h1>
        <p className="text-muted-foreground">
          Browse our collection of documents and resources.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {documents.map((doc) => (
            <Card key={doc.id}>
                <CardHeader>
                    <CardTitle>{doc.title}</CardTitle>
                    <CardDescription>
                        {doc.description}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button>Download</Button>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}
