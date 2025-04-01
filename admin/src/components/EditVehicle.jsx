import { useState, useEffect } from "react";
import axios from "axios";

function EditVehicle() {
  const [vehicles, setVehicles] = useState([]);
  const [editVehicle, setEditVehicle] = useState(null); // For editing a specific vehicle
  const [image, setImage] = useState(null); // Main image file
  const [imageArray, setImageArray] = useState([]); // Additional image files

  // Fetch vehicles on mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/vehicles")
      .then((res) => setVehicles(res.data))
      .catch((err) => console.error("Error fetching vehicles:", err));
  }, []);

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditVehicle((prev) => ({ ...prev, [name]: value }));
  };

  // Handle main image file
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle additional image files
  const handleImageArrayChange = (e) => {
    setImageArray(Array.from(e.target.files));
  };

  // Update vehicle with optional image uploads
  const handleUpdateVehicle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // Append text fields
    for (const key in editVehicle) {
      if (key !== "_id" && key !== "__v" && key !== "image" && key !== "imageArray") {
        formData.append(key, editVehicle[key]);
      }
    }
    // Append new main image if uploaded
    if (image) formData.append("image", image);
    // Append new additional images if uploaded
    if (imageArray.length > 0) {
      imageArray.forEach((file) => formData.append("imageArray", file));
    }

    try {
      const res = await axios.put(
        `http://localhost:5000/api/vehicles/update/${editVehicle._id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setVehicles(vehicles.map((v) => (v._id === editVehicle._id ? res.data : v)));
      setEditVehicle(null); // Clear form after update
      setImage(null);
      setImageArray([]);
      document.getElementById("imageInput").value = ""; // Reset file input
      document.getElementById("imageArrayInput").value = ""; // Reset file input
      alert("Vehicle updated successfully!");
    } catch (err) {
      alert("Error updating vehicle: " + (err.response?.data?.error || err.message));
    }
  };

  // Delete vehicle
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/vehicles/delete/${id}`)
      .then(() => {
        setVehicles(vehicles.filter((v) => v._id !== id));
        alert("Vehicle deleted successfully!");
      })
      .catch((err) => alert("Error deleting vehicle: " + err.message));
  };

  // Start editing a vehicle
  const handleEdit = (vehicle) => {
    setEditVehicle(vehicle);
    setImage(null); // Reset image file state
    setImageArray([]); // Reset additional images state
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Manage Vehicles</h1>

      {/* Edit Form (shown only when editing) */}
      {editVehicle && (
        <div className="mb-12 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-yellow-500 pb-2">
            Edit Vehicle: {editVehicle.name}
          </h2>
          <form onSubmit={handleUpdateVehicle} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-medium text-gray-700">Vehicle Name</label>
              <input
                type="text"
                name="name"
                value={editVehicle.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={editVehicle.location}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Price</label>
              <input
                type="text"
                name="price"
                value={editVehicle.price}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Engine</label>
              <input
                type="text"
                name="engine"
                value={editVehicle.engine}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Doors</label>
              <input
                type="text"
                name="doors"
                value={editVehicle.doors}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Seats</label>
              <input
                type="text"
                name="seats"
                value={editVehicle.seats}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Fuel Type</label>
              <input
                type="text"
                name="fuel"
                value={editVehicle.fuel}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Transmission</label>
              <input
                type="text"
                name="transmission"
                value={editVehicle.transmission}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <div className="col-span-2">
              <label className="block text-lg font-medium text-gray-700">Main Image</label>
              <input
                type="file"
                id="imageInput"
                name="image"
                onChange={handleImageChange}
                className="w-full p-3 border rounded-lg"
                accept="image/*"
              />
              {editVehicle.image && (
                <p className="text-sm text-gray-500 mt-1">
                  Current: <a href={editVehicle.image} target="_blank" rel="noopener noreferrer">View Image</a>
                </p>
              )}
            </div>
            <div className="col-span-2">
              <label className="block text-lg font-medium text-gray-700">Additional Images (up to 5)</label>
              <input
                type="file"
                id="imageArrayInput"
                name="imageArray"
                onChange={handleImageArrayChange}
                className="w-full p-3 border rounded-lg"
                accept="image/*"
                multiple
              />
              {editVehicle.imageArray.length > 0 && (
                <div className="text-sm text-gray-500 mt-1">
                  Current:
                  <ul>
                    {editVehicle.imageArray.map((url, index) => (
                      <li key={index}>
                        <a href={url} target="_blank" rel="noopener noreferrer">Image {index + 1}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="col-span-2">
              <label className="block text-lg font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={editVehicle.description}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                rows="4"
                required
              />
            </div>
            <div className="col-span-2 flex justify-center space-x-4">
              <button
                type="submit"
                className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition duration-200"
              >
                Update Vehicle
              </button>
              <button
                type="button"
                onClick={() => setEditVehicle(null)}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Vehicle List */}
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-500 pb-2">
          Existing Vehicles
        </h2>
        {vehicles.length === 0 ? (
          <p className="text-gray-600 text-center">No vehicles added yet.</p>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 text-gray-700">Name</th>
                <th className="p-3 text-gray-700">Location</th>
                <th className="p-3 text-gray-700">Price</th>
                <th className="p-3 text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle) => (
                <tr key={vehicle._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{vehicle.name}</td>
                  <td className="p-3">{vehicle.location}</td>
                  <td className="p-3">{vehicle.price}</td>
                  <td className="p-3 flex space-x-2">
                    <button
                      onClick={() => handleEdit(vehicle)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition duration-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(vehicle._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default EditVehicle;