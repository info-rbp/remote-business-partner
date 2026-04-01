import Link from 'next/link';

const AdminHeader = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">Admin Portal</div>
        <div className="flex items-center space-x-4">
          <span>Alerts</span>
          <span>Admin User</span>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
