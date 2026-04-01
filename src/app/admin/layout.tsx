import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">Admin Area</h1>
        <nav className="space-y-4">
          <Link href="/admin/dashboard" className="block hover:text-gray-300">Dashboard</Link>
          <Link href="/admin/users" className="block hover:text-gray-300">Users</Link>
          <Link href="/" className="block hover:text-gray-300 mt-8">Back to Main Site</Link>
        </nav>
      </aside>
      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  );
}
