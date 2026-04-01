import Link from 'next/link';

const AdminSidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Portal</h2>
      <nav>
        <ul>
          <li><Link href="/admin/dashboard">Dashboard</Link></li>
          <li><Link href="/admin/content">Content</Link></li>
          <li><Link href="/admin/docushare">DocuShare</Link></li>
          <li><Link href="/admin/memberships">Memberships</Link></li>
          <li><Link href="/admin/entitlements">Entitlements</Link></li>
          <li><Link href="/admin/applications">Applications</Link></li>
          <li><Link href="/admin/customers">Customers</Link></li>
          <li><Link href="/admin/support">Support</Link></li>
          <li><Link href="/admin/billing">Billing</Link></li>
          <li><Link href="/admin/analytics">Analytics</Link></li>
          <li><Link href="/admin/permissions">Permissions</Link></li>
          <li><Link href="/admin/audit">Audit</Link></li>
          <li><Link href="/admin/settings">Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
