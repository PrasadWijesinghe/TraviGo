import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaCar,
  FaBook,
  FaCog,
  FaSignOutAlt,
} from 'react-icons/fa';

const VehicleSidebar = () => {
  return (
    <div className="w-64 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-lg flex flex-col">
      {/* Header Section */}
      <div className="p-6">
        <h2 className="text-2xl font-bold flex items-center tracking-wide">
          <span className="mr-2 text-blue-400">🚗</span> TraviGo Provider
        </h2>
        <div className="mt-6 flex items-center group p-3 bg-gray-800 rounded-xl shadow-inner">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover mr-3 transition-transform group-hover:scale-105"
          />
          <div>
            <p className="text-sm font-semibold group-hover:text-blue-300 transition-colors">Vehicle Provider</p>
            <p className="text-xs text-gray-400">City Rentals</p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4">
        <ul>
          <li className="mb-2">
            <NavLink
              to="/vehicle/dashboard"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300 ${
                  isActive ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white' : ''
                }`
              }
            >
              <FaTachometerAlt className="mr-3" /> Dashboard
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to="/vehicle/manage-vehicles"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300 ${
                  isActive ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white' : ''
                }`
              }
            >
              <FaCar className="mr-3" /> Manage Vehicles
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to="/vehicle/bookings"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300 ${
                  isActive ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white' : ''
                }`
              }
            >
              <FaBook className="mr-3" /> Vehicle Bookings
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to="/vehicle/settings"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300 ${
                  isActive ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white' : ''
                }`
              }
            >
              <FaCog className="mr-3" /> Settings
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Sign Out Button */}
      <div className="p-4">
        <NavLink
          to="/sign-out"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg text-gray-300 hover:bg-red-600/50 hover:text-white transition-all duration-300 ${
              isActive ? 'bg-red-600 text-white' : ''
            }`
          }
        >
          <FaSignOutAlt className="mr-3" /> Sign Out
        </NavLink>
      </div>
    </div>
  );
};

export default VehicleSidebar;