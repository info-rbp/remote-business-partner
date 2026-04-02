'use client';

import Link from 'next/link';
import { clearSessionCookie } from '@/app/actions';
import { useRouter } from 'next/navigation';

const AdminHeader = () => {
  const router = useRouter();

  const handleLogout = async () => {
      await clearSessionCookie();
      router.push('/sign-in');
      router.refresh();
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">Admin Portal</div>
        <div className="flex items-center space-x-4">
          <span>Alerts</span>
          <span>Admin User</span>
          <button onClick={handleLogout} className="text-sm text-red-500 hover:text-red-700">Logout</button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;