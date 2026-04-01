import Link from 'next/link';

const PortalSidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 p-4">
      <h2 className="text-2xl font-bold mb-4">Client Portal</h2>
      <nav>
        <ul>
          <li><Link href="/portal/dashboard">Dashboard</Link></li>
          <li><Link href="/portal/membership">My Membership</Link></li>
          <li><Link href="/portal/billing">Billing</Link></li>
          <li><Link href="/portal/docushare">DocuShare Access</Link></li>
          <li><Link href="/portal/applications">Applications</Link></li>
          <li><Link href="/portal/support">Support</Link></li>
          <li><Link href="/portal/resources">Resources</Link></li>
          <li><Link href="/portal/profile">Profile</Link></li>
          <li><Link href="/portal/team">Team</Link></li>
          <li><Link href="/portal/security">Security</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default PortalSidebar;
