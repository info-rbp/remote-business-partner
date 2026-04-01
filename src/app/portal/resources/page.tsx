
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, Video, FileText } from "lucide-react";

const resources = [
    { 
        title: "Getting Started with our Platform", 
        type: "Guide", 
        icon: <BookOpen className="h-6 w-6 text-blue-500" />,
        description: "A comprehensive guide to help you get up and running with our platform.",
        href: "#"
    },
    { 
        title: "Video Tutorial: Mastering the Sales Hub", 
        type: "Video",
        icon: <Video className="h-6 w-6 text-red-500" />,
        description: "A step-by-step video tutorial on how to make the most of our Sales Hub.",
        href: "#"
    },
    { 
        title: "Best Practices for Customer Support", 
        type: "Article",
        icon: <FileText className="h-6 w-6 text-green-500" />,
        description: "Learn the best practices for providing top-notch customer support.",
        href: "#"
    },
];

export default function ResourcesPage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-bold">Resources</h1>
                <p className="text-gray-500">Explore our guides, tutorials, and articles to help you succeed.</p>
            </header>

            {/* Search and Filter */}
            <div className="flex justify-between items-center">
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input placeholder="Search resources..." className="pl-10" />
                </div>
            </div>

            {/* Resources List */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {resources.map(resource => (
                    <a href={resource.href} key={resource.title}>
                        <Card className="h-full hover:shadow-lg transition-shadow">
                            <CardHeader className="flex flex-row items-center gap-4">
                                {resource.icon}
                                <CardTitle>{resource.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-500">{resource.description}</p>
                                <p className="text-xs text-gray-400 mt-4">{resource.type}</p>
                            </CardContent>
                        </Card>
                    </a>
                ))}
            </div>
        </div>
    );
}
