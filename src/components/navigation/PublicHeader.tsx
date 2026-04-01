
import Link from 'next/link';

export default function PublicHeader() {
  return (
    <header className="p-4 bg-gray-100 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">MyApp</Link>
        <nav>
          <Link href="/home" className="mr-4">Home</Link>
          <Link href="/applications" className="mr-4">Applications</Link>
          <Link href="/membership" className="mr-4">Membership</Link>
          <Link href="/offers" className="mr-4">Offers</Link>
          <Link href="/resources" className="mr-4">Resources</Link>
          <Link href="/help" className="mr-4">Help</Link>
          <Link href="/contact" className="mr-4">Contact</Link>
          <Link href="/docushare">DocuShare</Link>
        </nav>
        <div>
          <Link href="/sign-in" className="mr-2">Sign In</Link>
          <Link href="/register" className="bg-blue-500 text-white px-4 py-2 rounded">Register</Link>
        </div>
      </div>
    </header>
  );
}
