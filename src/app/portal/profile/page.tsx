import React from 'react';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Profile</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Organization Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Organization Name</h3>
              <p>Example Corp</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Primary Contact</h3>
              <p>John Doe</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p>john.doe@example.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p>123-456-7890</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">Preferences</h3>
            <div className="flex items-center">
              <input type="checkbox" id="email-notifications" className="mr-2" />
              <label htmlFor="email-notifications">Receive email notifications</label>
            </div>
          </div>
          <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
