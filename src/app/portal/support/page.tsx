import React from 'react';

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Support</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Submit a Ticket</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-lg font-medium mb-2">Subject</label>
                <input type="text" id="subject" className="w-full p-2 rounded bg-gray-200 dark:bg-gray-700" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full p-2 rounded bg-gray-200 dark:bg-gray-700"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </form>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Issue History</h2>
            <p>No recent issues.</p>
          </div>
        </div>
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Guidance and Escalation</h2>
          <p>For urgent issues, please call our 24/7 support line at <span className="font-bold">1-800-123-4567</span>.</p>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
