// src/components/Sidebar.js
import { Link, useNavigate } from "react-router-dom";

function Sidebar({ adminName }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the authentication token
    navigate("/login");
  };

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col justify-between h-full">
      <div>
        <div className="p-4 text-xl font-bold border-b border-gray-700">
          Vehicle Manager Dashboard
        </div>
        <div className="p-4 text-lg">Welcome, {adminName}</div>
        <nav className="mt-4">
          <Link to="/" className="block p-4 hover:bg-gray-700">
            Home
          </Link>
          <Link to="/bookings-manage" className="block p-4 hover:bg-gray-700">
            Vehicle Bookings
          </Link>
          <Link to="/booking-history" className="block p-4 hover:bg-gray-700">
            Booking History
          </Link>
          <Link to="/add-vehicle" className="block p-4 hover:bg-gray-700">
            Add Vehicle
          </Link>
          <Link to="/edit-vehicle" className="block p-4 hover:bg-gray-700">
            Manage Vehicles
          </Link>
        </nav>
      </div>
      <button
        onClick={handleLogout}
        className="p-4 bg-red-600 hover:bg-red-700 text-center"
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;