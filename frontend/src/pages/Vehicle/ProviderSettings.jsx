import React from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const ProviderSettings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Provider Settings</h1>
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 space-y-8">
        {/* Profile Section */}
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-900">City Rentals</h2>
            <p className="text-gray-600">Vehicle Provider</p>
            <button className="mt-2 text-blue-600 hover:underline">Change Profile Picture</button>
          </div>
        </div>

        {/* Business Information */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Information</h2>
          <form className="space-y-4">
            <div className="relative">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="business-name">
                Business Name
              </label>
              <div className="flex items-center border rounded-lg">
                <FaUser className="text-gray-400 ml-3" />
                <input
                  type="text"
                  id="business-name"
                  defaultValue="City Rentals"
                  className="w-full p-3 pl-10 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>
            <div className="relative">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="contact-email">
                Contact Email
              </label>
              <div className="flex items-center border rounded-lg">
                <FaEnvelope className="text-gray-400 ml-3" />
                <input
                  type="email"
                  id="contact-email"
                  defaultValue="contact@cityrentals.com"
                  className="w-full p-3 pl-10 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all shadow-md"
            >
              Save Changes
            </button>
          </form>
        </div>

        {/* Change Password */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Change Password</h2>
          <form className="space-y-4">
            <div className="relative">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="current-password">
                Current Password
              </label>
              <div className="flex items-center border rounded-lg">
                <FaLock className="text-gray-400 ml-3" />
                <input
                  type="password"
                  id="current-password"
                  className="w-full p-3 pl-10 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>
            <div className="relative">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="new-password">
                New Password
              </label>
              <div className="flex items-center border rounded-lg">
                <FaLock className="text-gray-400 ml-3" />
                <input
                  type="password"
                  id="new-password"
                  className="w-full p-3 pl-10 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all shadow-md"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProviderSettings;