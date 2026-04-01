import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">Fintech</Link>
        <nav>
          <ul className="flex space-x-8">
            <li><Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
            <li><Link href="/about" className="text-gray-700 hover:text-blue-600">About Us</Link></li>
            <li><Link href="/offers" className="text-gray-700 hover:text-blue-600">Offers</Link></li>
            <li><Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact Us</Link></li>
          </ul>
        </nav>
        <div>
          <Link href="/login" className="text-gray-700 hover:text-blue-600 mr-4">Login</Link>
          <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-full">Register</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
