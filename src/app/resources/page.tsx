
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Mic, Video } from "lucide-react";
import Link from "next/link";

const resources = [
  {
    title: "Getting Started Guide",
    description: "Learn the basics of our platform and get up and running in no time.",
    icon: <BookOpen className="h-8 w-8 text-blue-500" />,
    link: "/resources/getting-started",
    type: "Guide"
  },
  {
    title: "Webinar: The Future of Sales",
    description: "Join our upcoming webinar to learn about the latest trends in sales and marketing.",
    icon: <Video className="h-8 w-8 text-green-500" />,
    link: "/resources/webinar-future-of-sales",
    type: "Webinar"
  },
  {
    title: "Podcast: Scaling Your Business",
    description: "Listen to our latest podcast episode on how to scale your business effectively.",
    icon: <Mic className="h-8 w-8 text-purple-500" />,
    link: "/resources/podcast-scaling-your-business",
    type: "Podcast"
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-12 px-4 md:px-6">
        <div className="container mx-auto">
          {/* Hero Section */}
          <section className="text-center py-12">
            <BookOpen className="h-12 w-12 mx-auto text-blue-600" />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mt-4">Resources</h1>
            <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl mt-4">
              Explore our collection of guides, articles, and webinars to help you succeed.
            </p>
          </section>

          {/* Resources Grid */}
          <section className="py-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource) => (
                <Card key={resource.title} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {resource.icon}
                      <div>
                        <CardTitle>{resource.title}</CardTitle>
                        <CardDescription>{resource.type}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p>{resource.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={resource.link} className="w-full">
                      <Button className="w-full">Read More</Button>
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
