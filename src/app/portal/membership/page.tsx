import React from 'react';

const MembershipPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">My Membership</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Current Plan</h2>
            <p className="text-lg">You are currently on the <span className="font-bold text-blue-500">Premium Plan</span>.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Inclusions</h2>
            <ul className="list-disc list-inside">
              <li>Unlimited access to all applications</li>
              <li>24/7 premium support</li>
              <li>Advanced analytics</li>
              <li>100GB storage</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Entitlements</h2>
            <p>Your entitlements include access to all features and services.</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Lifecycle Visibility</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <p>Your subscription is active and will renew on <span className="font-bold">December 31, 2024</span>.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Manage Subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;
