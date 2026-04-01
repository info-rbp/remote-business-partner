import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">My App</h1>
          <nav className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
            <Link href="/applications" className="text-gray-600 hover:text-gray-800">Applications</Link>
            <Link href="/membership" className="text-gray-600 hover:text-gray-800">Membership</Link>
            <Link href="/offers" className="text-gray-600 hover:text-gray-800">Offers</Link>
            <Link href="/resources" className="text-gray-600 hover:text-gray-800">Resources</Link>
            <Link href="/help" className="text-gray-600 hover:text-gray-800">Help</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
            <Link href="/docushare" className="text-gray-600 hover:text-gray-800">DocuShare</Link>
          </nav>
          <div>
            <Link href="/sign-in" className="text-gray-600 hover:text-gray-800">Sign In</Link>
            <Link href="/register" className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Register</Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center py-20">
          <h2 className="text-5xl font-extrabold text-gray-900">Welcome to the Future of Applications</h2>
          <p className="mt-4 text-xl text-gray-600">A platform to build, manage, and scale your applications with ease.</p>
          <div className="mt-8">
            <Link href="/register" className="px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-lg">Get Started</Link>
          </div>
        </section>

        <section className="py-20">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <h4 className="text-2xl font-semibold text-gray-800">Feature One</h4>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-semibold text-gray-800">Feature Two</h4>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-semibold text-gray-800">Feature Three</h4>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">Testimonials</h3>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-lg text-gray-600">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              <p className="mt-4 text-right font-semibold text-gray-800">- John Doe</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p>&copy; 2024 My App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}