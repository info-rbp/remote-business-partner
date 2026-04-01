import Link from 'next/link';

export default function SellerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-700 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">Seller Area</h1>
        <nav className="space-y-4">
          <Link href="/seller/dashboard" className="block hover:text-gray-300">Dashboard</Link>
          <Link href="/seller/products" className="block hover:text-gray-300">Products</Link>
          <Link href="/seller/orders" className="block hover:text-gray-300">Orders</Link>
          <Link href="/" className="block hover:text-gray-300 mt-8">Back to Main Site</Link>
        </nav>
      </aside>
      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  );
}
