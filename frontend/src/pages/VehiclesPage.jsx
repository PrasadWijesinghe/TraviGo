import React, { useState, useEffect } from "react";
import VehicleCard from "../components/VehicleCard";
import Navbar from "../components/Navbar"; // Assuming Navbar is in the same directory
import axios from "axios";

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch vehicles from the backend
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/vehicles");
        setVehicles(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load vehicles. Please try again later.");
        setLoading(false);
      }
    };
    fetchVehicles();
  }, []);

  return (
    <div className="min-h-screen bg-gray-800">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 mx-4 sm:mx-6 lg:mx-8 mt-4 z-50">
        <Navbar className="rounded-xl shadow-lg bg-white" />
      </div>

      {/* Main Content */}
      <div className="pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-white mb-12 tracking-tight">
          Our Vehicles
        </h1>

        {loading ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <p className="text-xl font-semibold text-gray-300 animate-pulse">
              Loading vehicles...
            </p>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <p className="text-xl font-semibold text-red-400 bg-red-50 px-6 py-3 rounded-lg shadow-sm">
              {error}
            </p>
          </div>
        ) : vehicles.length === 0 ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <p className="text-lg text-gray-400">No vehicles available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle._id} vehicle={vehicle} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VehiclesPage;