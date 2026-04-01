
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    features: [
      "Access to public resources",
      "Basic community support",
      "Limited application access"
    ],
    cta: "Get Started",
    link: "/register"
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    features: [
      "Full access to all applications",
      "Priority support",
      "Exclusive member offers",
      "Advanced analytics"
    ],
    cta: "Upgrade to Pro",
    link: "/register?plan=pro"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "All Pro features",
      "Dedicated account manager",
      "On-premise deployment options",
      "Custom integrations"
    ],
    cta: "Contact Sales",
    link: "/contact"
  }
];

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-12 px-4 md:px-6">
        <div className="container mx-auto">
          {/* Hero Section */}
          <section className="text-center py-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mt-4">Our Membership Plans</h1>
            <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl mt-4">
              Choose the plan that's right for you and unlock a world of benefits.
            </p>
          </section>

          {/* Pricing Tiers */}
          <section className="py-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {tiers.map((tier) => (
                <Card key={tier.name} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{tier.name}</CardTitle>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      {tier.period && <span className="text-lg text-gray-500">{tier.period}</span>}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href={tier.link} className="w-full">
                      <Button className="w-full">{tier.cta}</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
