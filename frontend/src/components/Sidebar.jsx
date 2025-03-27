import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHotel, FaCar, FaUserTie, FaUsers, FaChartBar, FaPaintBrush, FaSignOutAlt } from "react-icons/fa";
// import adminImage from "../assets/admin.jpg"; // Comment out or remove if not using

const Sidebar = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Admin data (hardcoded for now)
  const adminName = "John Doe";
  const profilePhoto = null; // Set to null to simulate no profile photo; replace with adminImage if available

  // Function to get initials from the admin's name
  const getInitials = (name) => {
    const nameParts = name.trim().split(" ");
    if (nameParts.length < 2) {
      return nameParts[0].charAt(0).toUpperCase(); // If only one name, use the first letter
    }
    const firstInitial = nameParts[0].charAt(0).toUpperCase();
    const lastInitial = nameParts[nameParts.length - 1].charAt(0).toUpperCase();
    return `${firstInitial}${lastInitial}`;
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-indigo-900 text-white rounded-lg"
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        aria-expanded={isOpen}
      >
        {isOpen ? "Close" : "Menu"}
      </button>
      {/* Sidebar */}
      <aside
        className={`w-64 bg-indigo-900 text-white flex flex-col h-screen fixed md:static transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } z-40`}
        aria-hidden={!isOpen && "true"}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold">TraviGO</h1>
          {/* Profile Section */}
          <div className="mt-4 flex items-center space-x-3">
            {profilePhoto ? (
              <img
                src={profilePhoto}
                alt="Admin Profile"
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white text-lg font-medium">
                {getInitials(adminName)}
              </div>
            )}
            <div>
              <p className="text-lg font-medium">{adminName}</p>
              <p className="text-sm text-gray-400">Admin</p>
            </div>
          </div>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            {/* Hotel Listings */}
            <li>
              <NavLink
                to="/admin/hotel-listings"
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-4 hover:bg-pink-100 hover:text-black ${
                    isActive ? "bg-pink-100 text-black" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <FaHotel className="w-5 h-5" />
                <span>Hotel Listings</span>
              </NavLink>
            </li>
            {/* Vehicle Listings */}
            <li>
              <NavLink
                to="/admin/vehicle-listings"
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-4 hover:bg-pink-100 hover:text-black ${
                    isActive ? "bg-pink-100 text-black" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <FaCar className="w-5 h-5" />
                <span>Vehicle Listings</span>
              </NavLink>
            </li>
            {/* Tour Guides */}
            <li>
              <NavLink
                to="/admin/tour-guides"
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-4 hover:bg-pink-100 hover:text-black ${
                    isActive ? "bg-pink-100 text-black" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <FaUserTie className="w-5 h-5" />
                <span>Tour Guides</span>
              </NavLink>
            </li>
            {/* Users */}
            <li>
              <NavLink
                to="/admin/users"
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-4 hover:bg-pink-100 hover:text-black ${
                    isActive ? "bg-pink-100 text-black" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <FaUsers className="w-5 h-5" />
                <span>Users</span>
              </NavLink>
            </li>
            {/* Reports */}
            <li>
              <NavLink
                to="/admin/reports"
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-4 hover:bg-pink-100 hover:text-black ${
                    isActive ? "bg-pink-100 text-black" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <FaChartBar className="w-5 h-5" />
                <span>Reports</span>
              </NavLink>
            </li>
            {/* UI Manage */}
            <li>
              <NavLink
                to="/admin/ui-manage"
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-4 hover:bg-pink-100 hover:text-black ${
                    isActive ? "bg-pink-100 text-black" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <FaPaintBrush className="w-5 h-5" />
                <span>UI Manage</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="p-6">
          <NavLink
            to="/logout"
            onClick={() => {
              onLogout();
              setIsOpen(false);
            }}
            className="flex items-center space-x-2 p-4 hover:bg-pink-100 hover:text-black"
          >
            <FaSignOutAlt className="w-5 h-5" />
            <span>Log Out</span>
          </NavLink>
        </div>
      </aside>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;