
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart, ShoppingCart, Code } from "lucide-react";
import Link from "next/link";

const applications = [
  {
    title: "CRM",
    description: "Manage customer relationships and sales pipelines.",
    icon: <BarChart className="h-8 w-8 text-blue-500" />,
    link: "/app/modules/customers"
  },
  {
    title: "E-commerce",
    description: "Set up and manage your online store with ease.",
    icon: <ShoppingCart className="h-8 w-8 text-green-500" />,
    link: "/app/modules/sales"
  },
  {
    title: "Developer API",
    description: "Build custom integrations and extend our platform.",
    icon: <Code className="h-8 w-8 text-purple-500" />,
    link: "/app/modules/finance"
  },
  // Add more applications as needed
];

export default function ApplicationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-12 px-4 md:px-6">
        <div className="container mx-auto">
          {/* Hero Section */}
          <section className="text-center py-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mt-4">Our Applications</h1>
            <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl mt-4">
              Discover a suite of powerful applications to enhance your business operations.
            </p>
          </section>

          {/* Applications Grid */}
          <section className="py-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {applications.map((app) => (
                <Card key={app.title} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {app.icon}
                      <CardTitle>{app.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription>{app.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link href={app.link} className="w-full">
                      <Button className="w-full">
                        Launch <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

           {/* CTA Section */}
           <section className="py-12 text-center">
             <h2 className="text-3xl font-bold">Ready to get started?</h2>
             <p className="text-xl text-gray-600 mt-2">Explore our membership plans to gain access.</p>
             <Link href="/membership">
              <Button size="lg" className="mt-6">
                View Membership Plans
              </Button>
             </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
