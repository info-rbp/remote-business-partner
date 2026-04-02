'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function OffersPage() {
    const offers = [
        { id: 1, title: 'Summer Sale', description: 'Get 20% off all plans for a limited time.' },
        { id: 2, title: 'Free Trial', description: 'Sign up now and get a 14-day free trial.' },
        { id: 3, title: 'Bundle Deal', description: 'Get the Sales and Support modules for a discounted price.' },
    ];

  return (
    <div className="flex flex-col gap-8 p-4 sm:p-6 lg:p-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Special Offers</h1>
        <p className="text-muted-foreground">
          Check out our latest offers and promotions.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer) => (
            <Card key={offer.id}>
                <CardHeader>
                    <CardTitle>{offer.title}</CardTitle>
                    <CardDescription>
                        {offer.description}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button>Learn More</Button>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}
