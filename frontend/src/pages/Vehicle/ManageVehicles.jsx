import React from 'react';

const ManageVehicles = () => {
  const vehicles = [
    {
      id: 1,
      type: 'Sedan',
      make: 'Toyota',
      model: 'Camry',
      price: 50,
      available: true,
      image: 'https://images.unsplash.com/photo-1580273916550-ebdde4c9d429?q=80&w=200&auto=format&fit=crop',
    },
    {
      id: 2,
      type: 'SUV',
      make: 'Honda',
      model: 'CR-V',
      price: 70,
      available: false,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=200&auto=format&fit=crop',
    },
    {
      id: 3,
      type: 'Van',
      make: 'Ford',
      model: 'Transit',
      price: 90,
      available: true,
      image: 'https://images.unsplash.com/photo-1596633609405-21d869c0b2f3?q=80&w=200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Manage Vehicles</h1>

      {/* Add Vehicle Button */}
      <div className="mb-8">
        <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all shadow-md">
          Add New Vehicle
        </button>
      </div>

      {/* Vehicle List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={vehicle.image}
              alt={`${vehicle.make} ${vehicle.model}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-900">
                {vehicle.type} - {vehicle.make} {vehicle.model}
              </h2>
              <p className="text-gray-600 mt-1">Price: ${vehicle.price}/day</p>
              <p className="text-gray-600">
                Available:{' '}
                <span className={vehicle.available ? 'text-green-600' : 'text-red-600'}>
                  {vehicle.available ? 'Yes' : 'No'}
                </span>
              </p>
              <div className="mt-4 flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Edit
                </button>
                <button className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageVehicles;