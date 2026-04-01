
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, HelpCircle, Briefcase, Zap, Heart } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unlock Your Business Potential
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    Our platform provides the tools and resources you need to succeed. From application management to member offers, we've got you covered.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/register"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1556740772-1a741367b93e?q=80&w=2070&auto=format&fit=crop"
                width="600"
                height="600"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                  Why Choose Us?
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  A Platform Built for Growth
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide a comprehensive suite of tools to help you manage your business, engage with customers, and drive success.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                    <Briefcase className="h-6 w-6 text-blue-500" />
                    <h3 className="text-xl font-bold">Business Tools</h3>
                </div>
                <p className="text-gray-500">
                  Access a wide range of applications and services to streamline your operations.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-purple-500" />
                    <h3 className="text-xl font-bold">Exclusive Offers</h3>
                </div>
                <p className="text-gray-500">
                  Benefit from special offers and discounts available only to our members.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                    <Heart className="h-6 w-6 text-red-500" />
                    <h3 className="text-xl font-bold">Community Support</h3>
                </div>
                <p className="text-gray-500">
                  Join a thriving community and get the help you need from our dedicated support team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Overview */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                An Integrated Platform to Run Your Business
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From sales and marketing to finance and operations, our platform brings everything together in one place.
              </p>
            </div>
            <div className="flex space-x-4 lg:justify-end">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                width="400"
                height="400"
                alt="Platform"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Featured Offers */}
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Offers</h2>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Check out our latest offers and promotions, exclusively for our members.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Free Month of Premium</CardTitle>
                            <CardDescription>Get your first month of our premium plan for free.</CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button>Claim Offer</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>20% Off Annual Plans</CardTitle>
                            <CardDescription>Save 20% when you sign up for an annual subscription.</CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button>Learn More</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Refer a Friend, Get $50</CardTitle>
                            <CardDescription>Refer a friend and you'll both get $50 in credit.</CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button>Refer Now</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>

        {/* Featured Applications */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Applications</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore some of the powerful applications available on our platform.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
                <Card>
                    <CardContent className="p-6">
                        <h3 className="text-lg font-bold">CRM</h3>
                        <p className="text-sm text-gray-500">Customer Relationship Management</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <h3 className="text-lg font-bold">Sales</h3>
                        <p className="text-sm text-gray-500">Sales and Marketing Automation</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <h3 className="text-lg font-bold">Finance</h3>
                        <p className="text-sm text-gray-500">Financial Management and Accounting</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <h3 className="text-lg font-bold">HR</h3>
                        <p className="text-sm text-gray-500">Human Resources and Payroll</p>
                    </CardContent>
                </Card>
            </div>
            <div className="text-center mt-8">
                <Link href="/applications">
                    <Button variant="outline">
                        View All Applications <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </div>
          </div>
        </section>

        {/* Membership CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Become a Member Today
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our community and unlock a world of benefits.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
                <Link href="/membership">
                    <Button className="w-full">
                        View Membership Plans
                    </Button>
                </Link>
              <p className="text-xs text-gray-500">
                Get started for free. No credit card required.
                <Link href="/terms" className="underline underline-offset-2 ml-1">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Resources Teaser */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
            <div className="container px-4 md:px-6">
                <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Helpful Resources</h2>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Check out our blog, guides, and other resources to help you get the most out of our platform.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Getting Started Guide</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Learn the basics of our platform and get up and running in no time.</p>
                        </CardContent>
                        <CardFooter>
                            <Link href="/resources/getting-started">
                                <Button variant="link">Read More</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Best Practices for CRM</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Discover tips and tricks for using our CRM to its full potential.</p>
                        </CardContent>
                        <CardFooter>
                            <Link href="/resources/crm-best-practices">
                                <Button variant="link">Read More</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Webinar: The Future of Sales</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Join our upcoming webinar to learn about the latest trends in sales and marketing.</p>
                        </CardContent>
                        <CardFooter>
                            <Link href="/resources/webinar-future-of-sales">
                                <Button variant="link">Register Now</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>

        {/* Help/Contact CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                We're Here to Help
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions? Reach out to our support team or browse our help center.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
                <div className="flex gap-4 justify-center">
                    <Link href="/help">
                        <Button>
                            <HelpCircle className="mr-2 h-4 w-4" /> Help Center
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
