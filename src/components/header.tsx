
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '/home', label: 'Home' },
  { href: '/docushare', label: 'DocuShare' },
  { href: '/applications', label: 'Applications' },
  { href: '/membership', label: 'Membership' },
  { href: '/offers', label: 'Offers' },
  { href: '/help', label: 'Help' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-100">
      <Link href="/home" className="text-2xl font-bold">
        Logo
      </Link>
      <nav className="hidden md:flex gap-4">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="hidden md:flex items-center gap-4">
        <Link href="/register">
          <Button>Register</Button>
        </Link>
      </div>
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="outline">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
            <Link href="/register">
              <Button>Register</Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
