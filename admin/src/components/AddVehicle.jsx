import { useState, useRef } from "react";
import axios from "axios";

function AddVehicle() {
  const [newVehicle, setNewVehicle] = useState({
    name: "",
    location: "",
    price: "",
    engine: "",
    doors: "",
    seats: "",
    fuel: "",
    transmission: "",
    description: "",
  });
  const [image, setImage] = useState(null); // Main image file
  const [imageArray, setImageArray] = useState([]); // Additional image files

  // Refs for file inputs
  const imageInputRef = useRef(null);
  const imageArrayInputRef = useRef(null);

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVehicle((prev) => ({ ...prev, [name]: value }));
  };

  // Handle main image file
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle additional image files
  const handleImageArrayChange = (e) => {
    setImageArray(Array.from(e.target.files));
  };

  // Add vehicle with images
  const handleAddVehicle = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in newVehicle) {
      formData.append(key, newVehicle[key]);
    }
    if (image) formData.append("image", image);
    imageArray.forEach((file) => formData.append("imageArray", file));

    // Log form data for debugging
    console.log("Form Data:", {
      newVehicle,
      image: image ? image.name : null,
      imageArray: imageArray.map((file) => file.name),
    });

    try {
      console.log("Sending POST request to /api/vehicles/add");
      const res = await axios.post("http://localhost:5000/api/vehicles/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Response:", res.data);

      // Reset form
      setNewVehicle({
        name: "",
        location: "",
        price: "",
        engine: "",
        doors: "",
        seats: "",
        fuel: "",
        transmission: "",
        description: "",
      });
      setImage(null);
      setImageArray([]);
      // Reset file inputs using refs
      if (imageInputRef.current) imageInputRef.current.value = "";
      if (imageArrayInputRef.current) imageArrayInputRef.current.value = "";

      alert("Vehicle added successfully!");
    } catch (err) {
      console.error("Error in POST request:", err);
      const errorMessage = err.response?.data?.error || err.message;
      alert("Error adding vehicle: " + errorMessage);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Vehicle</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 max-w-4xl mx-auto">
        <form onSubmit={handleAddVehicle} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Vehicle Name</label>
            <input
              type="text"
              name="name"
              value={newVehicle.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Toyota CHR"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={newVehicle.location}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Colombo"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Price</label>
            <input
              type="text"
              name="price"
              value={newVehicle.price}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 1000$"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Engine</label>
            <input
              type="text"
              name="engine"
              value={newVehicle.engine}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 1197cc"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Doors</label>
            <input
              type="text"
              name="doors"
              value={newVehicle.doors}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 2"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Seats</label>
            <input
              type="text"
              name="seats"
              value={newVehicle.seats}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 4"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Fuel Type</label>
            <input
              type="text"
              name="fuel"
              value={newVehicle.fuel}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Petrol"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Transmission</label>
            <input
              type="text"
              name="transmission"
              value={newVehicle.transmission}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Automatic"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-lg font-medium text-gray-700">Main Image</label>
            <input
              type="file"
              id="imageInput"
              name="image"
              ref={imageInputRef} // Use ref instead of id
              onChange={handleImageChange}
              className="w-full p-3 border rounded-lg"
              accept="image/*"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-lg font-medium text-gray-700">Additional Images (up to 5)</label>
            <input
              type="file"
              id="imageArrayInput"
              name="imageArray"
              ref={imageArrayInputRef} // Use ref instead of id
              onChange={handleImageArrayChange}
              className="w-full p-3 border rounded-lg"
              accept="image/*"
              multiple
            />
          </div>
          <div className="col-span-2">
            <label className="block text-lg font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={newVehicle.description}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="e.g., A compact crossover SUV..."
              required
            />
          </div>
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200"
            >
              Add Vehicle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddVehicle;