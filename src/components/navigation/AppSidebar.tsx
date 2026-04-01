import Link from 'next/link';

const AppSidebar = () => {
  return (
    <div className="bg-gray-700 text-white w-64 p-4">
      <h2 className="text-2xl font-bold mb-4">Application Layer</h2>
      <nav>
        <ul>
          <li><Link href="/app/dashboard">Dashboard</Link></li>
          <li><Link href="/app/modules">Modules</Link></li>
          <li><Link href="/app/subscription">Subscription</Link></li>
          <li><Link href="/app/settings">Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AppSidebar;
