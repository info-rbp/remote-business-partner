
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, Bell, BarChart3, Settings, LogOut, LayoutGrid, FileText, ShoppingCart, Users, CreditCard, Shield, LifeBuoy, BookOpen, GanttChartSquare, Megaphone, BarChart, FileCheck, SlidersHorizontal, Package } from "lucide-react";

const navItems = [
    { href: "/app/dashboard", icon: <LayoutGrid className="h-5 w-5" />, label: "Dashboard" },
    { href: "/app/modules", icon: <Package className="h-5 w-5" />, label: "Modules" },
    { href: "/app/subscription", icon: <CreditCard className="h-5 w-5" />, label: "Subscription" },
    { href: "/app/settings", icon: <SlidersHorizontal className="h-5 w-5" />, label: "Settings" },
];

const UserMenu = () => (
    <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
        </Button>
    </div>
);

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-gray-100">
      {/* Sidebar for desktop */}
      <aside className="hidden w-64 flex-col border-r bg-white p-4 sm:flex">
        <div className="mb-8 flex items-center gap-2">
            <BarChart3 className="h-8 w-8 text-purple-600"/>
            <h1 className="text-xl font-bold">App Layer</h1>
        </div>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <Button variant="ghost" className="flex w-full items-center justify-start gap-2">
                {item.icon}
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
         <div className="mt-auto flex flex-col gap-2">
            <Button variant="ghost" className="flex w-full items-center justify-start gap-2">
                <Settings className="h-5 w-5"/>
                Settings
            </Button>
            <Button variant="ghost" className="flex w-full items-center justify-start gap-2">
                <LogOut className="h-5 w-5"/>
                Logout
            </Button>
        </div>
      </aside>

      <div className="flex flex-1 flex-col">
        {/* Header for mobile */}
        <header className="flex items-center justify-between border-b bg-white p-4 sm:hidden">
          <Link href="/app/dashboard">
            <h1 className="text-xl font-bold">App Layer</h1>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex w-64 flex-col p-4">
                <div className="mb-8 flex items-center gap-2">
                    <BarChart3 className="h-8 w-8 text-purple-600"/>
                    <h1 className="text-xl font-bold">App Layer</h1>
                </div>
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link key={item.label} href={item.href}>
                     <Button variant="ghost" className="flex w-full items-center justify-start gap-2">
                        {item.icon}
                        {item.label}
                    </Button>
                  </Link>
                ))}
              </nav>
                <div className="mt-auto flex flex-col gap-2">
                    <Button variant="ghost" className="flex w-full items-center justify-start gap-2">
                        <Settings className="h-5 w-5"/>
                        Settings
                    </Button>
                    <Button variant="ghost" className="flex w-full items-center justify-start gap-2">
                        <LogOut className="h-5 w-5"/>
                        Logout
                    </Button>
                </div>
            </SheetContent>
          </Sheet>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6">
            <div className="flex items-center justify-end mb-6">
                <UserMenu />
            </div>
            {children}
        </main>
      </div>
    </div>
  );
}
