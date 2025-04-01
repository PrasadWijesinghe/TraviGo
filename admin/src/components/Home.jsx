import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [vehicles, setVehicles] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch vehicles
    const fetchVehicles = async () => {
      try {
        const vehicleResponse = await axios.get("http://localhost:5000/api/vehicles");
        setVehicles(vehicleResponse.data);
      } catch (err) {
        setError("Error fetching vehicles: " + err.message);
      }
    };

    // Fetch bookings
    const fetchBookings = async () => {
      try {
        const bookingResponse = await axios.get("http://localhost:5000/api/rent");
        setBookings(bookingResponse.data.data); // Adjusted for { success, data }
      } catch (err) {
        setError("Error fetching bookings: " + err.message);
      }
    };

    // Execute both fetches and set loading state
    Promise.all([fetchVehicles(), fetchBookings()])
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, []);

  const totalVehicles = vehicles.length;
  const totalBookings = bookings.length;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-xl font-semibold text-gray-600 animate-pulse">
          Loading data...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-xl font-semibold text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-10 tracking-tight text-center">
          Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Total Bookings
            </h2>
            <p className="text-5xl font-bold text-blue-600">{totalBookings}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Total Vehicles
            </h2>
            <p className="text-5xl font-bold text-blue-600">{totalVehicles}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;