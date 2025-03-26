import React from 'react';
import { FaCheckCircle, FaClock, FaCheck } from 'react-icons/fa';

const VehicleBookings = () => {
  const bookings = [
    {
      id: 1,
      vehicle: 'Toyota Camry',
      customer: 'John Doe',
      date: '2025-04-01',
      price: 150,
      status: 'Confirmed',
      image: 'https://images.unsplash.com/photo-1580273916550-ebdde4c9d429?q=80&w=200&auto=format&fit=crop',
    },
    {
      id: 2,
      vehicle: 'Honda CR-V',
      customer: 'Jane Smith',
      date: '2025-04-02',
      price: 210,
      status: 'Pending',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=200&auto=format&fit=crop',
    },
    {
      id: 3,
      vehicle: 'Ford Transit',
      customer: 'Alice Brown',
      date: '2025-04-03',
      price: 270,
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1596633609405-21d869c0b2f3?q=80&w=200&auto=format&fit=crop',
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Confirmed':
        return (
          <span className="flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
            <FaCheckCircle /> <span>Confirmed</span>
          </span>
        );
      case 'Pending':
        return (
          <span className="flex items-center space-x-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
            <FaClock /> <span>Pending</span>
          </span>
        );
      case 'Completed':
        return (
          <span className="flex items-center space-x-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
            <FaCheck /> <span>Completed</span>
          </span>
        );
      default:
        return null;
    }
  };

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/200x200?text=Image+Not+Found';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Vehicle Bookings</h1>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All Bookings</h2>
        <div className="space-y-6">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <img
                src={booking.image}
                alt={booking.vehicle}
                className="w-20 h-20 object-cover rounded-lg"
                onError={handleImageError}
              />
              <div className="flex-1">
                <p className="text-lg font-semibold text-gray-900">{booking.vehicle}</p>
                <p className="text-gray-600">Customer: {booking.customer}</p>
                <p className="text-gray-600">Date: {booking.date}</p>
                <div className="mt-1">{getStatusBadge(booking.status)}</div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">${booking.price}</p>
                <button className="text-blue-600 hover:underline">Manage</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehicleBookings;