import { useState, useEffect } from "react";
import axios from "axios";

function BookingsManage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch bookings from the backend
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/rent");
        setBookings(response.data.data); // Adjusted for { success, data } response
        setLoading(false);
      } catch (err) {
        setError("Failed to load bookings: " + err.message);
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  const handleAccept = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/rent/${id}`, {
        status: "Accepted",
      });
      setBookings(
        bookings.map((booking) =>
          booking._id === id ? { ...booking, status: "Accepted" } : booking
        )
      );
    } catch (err) {
      setError("Failed to accept booking: " + err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/rent/${id}`);
      setBookings(bookings.filter((booking) => booking._id !== id));
    } catch (err) {
      setError("Failed to delete booking: " + err.message);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-xl font-semibold text-gray-600 animate-pulse">
          Loading bookings...
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
          Vehicle Bookings Management
        </h1>

        {bookings.length === 0 ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <p className="text-lg text-gray-600">No bookings available.</p>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-2xl shadow-xl overflow-x-auto">
            <table className="w-full text-left min-w-[800px]">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-4 font-semibold">Customer</th>
                  <th className="p-4 font-semibold">Vehicle</th>
                  <th className="p-4 font-semibold">Start Date</th>
                  <th className="p-4 font-semibold">End Date</th>
                  <th className="p-4 font-semibold">Total Price</th>
                  <th className="p-4 font-semibold">Status</th>
                  <th className="p-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking._id}
                    className="border-b hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-4">{booking.name}</td>
                    <td className="p-4">{booking.vehicleName}</td>
                    <td className="p-4">
                      {new Date(booking.startDate).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      {new Date(booking.endDate).toLocaleDateString()}
                    </td>
                    <td className="p-4">${booking.totalPrice.toFixed(2)}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          booking.status === "Accepted"
                            ? "bg-green-100 text-green-700"
                            : booking.status === "Rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="p-4 flex space-x-3">
                      {booking.status === "Pending" && (
                        <button
                          onClick={() => handleAccept(booking._id)}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >
                          Accept
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(booking._id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingsManage;