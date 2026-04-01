import Link from 'next/link';

const ClientHeader = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">Client Portal</div>
        <div className="flex items-center space-x-4">
          <span>Notifications</span>
          <span>Account</span>
        </div>
      </div>
    </header>
  );
};

export default ClientHeader;
