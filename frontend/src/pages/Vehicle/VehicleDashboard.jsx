import React from 'react';
import { FaCheckCircle, FaClock, FaDollarSign, FaCar } from 'react-icons/fa';

const VehicleDashboard = () => {
  const stats = [
    { label: 'Total Vehicles', value: 15, icon: <FaCar className="text-blue-600" />, bgColor: 'bg-blue-100' },
    { label: 'Active Bookings', value: 8, icon: <FaClock className="text-yellow-600" />, bgColor: 'bg-yellow-100' },
    { label: 'Total Revenue', value: '$12,500', icon: <FaDollarSign className="text-green-600" />, bgColor: 'bg-green-100' },
  ];

  const recentBookings = [
    {
      id: 1,
      vehicle: 'Toyota Camry',
      customer: 'John Doe',
      date: '2025-04-01',
      price: 150,
      image: 'https://images.unsplash.com/photo-1580273916550-ebdde4c9d429?q=80&w=200&auto=format&fit=crop',
    },
    {
      id: 2,
      vehicle: 'Honda CR-V',
      customer: 'Jane Smith',
      date: '2025-04-02',
      price: 210,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=200&auto=format&fit=crop',
    },
  ];

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/200x200?text=Image+Not+Found';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-48 rounded-xl mb-8"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Welcome, Vehicle Provider!</h1>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow ${stat.bgColor}`}
          >
            <div className="flex items-center space-x-4">
              <div className="text-3xl">{stat.icon}</div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{stat.label}</h2>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Bookings</h2>
        <div className="space-y-6">
          {recentBookings.map((booking) => (
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
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">${booking.price}</p>
                <button className="text-blue-600 hover:underline">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehicleDashboard;