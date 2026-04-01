import React from 'react';

const BillingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Billing</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Purchases</h2>
          <p>No recent purchases.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Subscriptions</h2>
          <p>You have an active subscription to the <span className="font-bold text-blue-500">Premium Plan</span>.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Invoices</h2>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-4 flex justify-between items-center">
              <div>
                <p className="font-bold">Invoice #12345</p>
                <p className="text-sm text-gray-500">Billed on October 26, 2023</p>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Download
              </button>
            </li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Billing Status</h2>
          <p>Your account is in good standing.</p>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
