import Link from 'next/link';

export default function MembersLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">Members Area</h1>
        <nav className="space-y-4">
          <Link href="/members/dashboard" className="block hover:text-gray-300">Dashboard</Link>
          <Link href="/members/profile" className="block hover:text-gray-300">Profile</Link>
          <Link href="/members/settings" className="block hover:text-gray-300">Settings</Link>
          <Link href="/" className="block hover:text-gray-300 mt-8">Back to Main Site</Link>
        </nav>
      </aside>
      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  );
}