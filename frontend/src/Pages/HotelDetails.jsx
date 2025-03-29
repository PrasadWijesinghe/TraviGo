import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { hotels } from "../assets/assets";

const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hotel = hotels.find((h) => h.Id === id);
  if (!hotel) {
    return <h2 className="text-center text-red-500 text-2xl font-semibold py-10">Hotel not found</h2>;
  }

  const {
    Name,
    MainImage1,
    Location,
    decs,
    roomType1,
    roomType1Fetures,
    roomType1Amenties,
    roomType1image,
    roomType2,
    roomType2Fetures,
    roomType2Amenties,
    roomType2image,
  } = hotel;

  const [selectedImage1, setSelectedImage1] = useState(
    roomType1image && roomType1image.length > 0
      ? roomType1image[0]
      : "https://via.placeholder.com/600x400?text=No+Image"
  );
  const [selectedImage2, setSelectedImage2] = useState(
    roomType2image && roomType2image.length > 0
      ? roomType2image[0]
      : "https://via.placeholder.com/600x400?text=No+Image"
  );

  const handleBooking = (roomType) => {
    navigate(`/booking/${id}/${roomType}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl shadow-2xl border border-blue-200">
        {/* Hotel Banner */}
        <div className="relative mb-10 overflow-hidden rounded-xl shadow-lg">
          <img
            src={MainImage1 || "https://via.placeholder.com/1200x400?text=No+Main+Image"}
            alt={Name}
            className="w-full h-96 object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-opacity-60 flex items-center justify-center rounded-xl">
            <div className=" bg-opacity-50 px-6 py-3 rounded-lg">
              <h2 className="text-4xl md:text-5xl font-extrabold text-blue-200 drop-shadow-2xl tracking-wide">
                {Name}
              </h2>
            </div>
          </div>
        </div>

        {/* Hotel Details */}
        <div className="text-center mb-12">
          
          <p className="text-gray-600 text-xl mt-3 max-w-3xl mx-auto leading-relaxed">
            {decs || "No description available."}
          </p>
        </div>

        {/* Room Details Section */}
        <h3 className="text-3xl font-semibold text-blue-600 border-b-2 border-blue-200 pb-3 mb-10">
          Rooms & Facilities
        </h3>

        {/* Room Type 1 */}
        <div className="mt-8 bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl">
          <h4 className="text-2xl font-semibold text-gray-900 mb-4">
            {roomType1 || "Standard Room"}
          </h4>

          {/* Features */}
          <div className="mb-4">
            <p className="text-gray-700 font-medium text-lg">Features</p>
            <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {(roomType1Fetures || "No features listed.")
                .split(", ")
                .map((feature, index) => (
                  <li
                    key={index}
                    className="text-gray-600 flex items-center space-x-2"
                  >
                    <span className="text-blue-500">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
            </ul>
          </div>

          {/* Amenities */}
          <div className="mb-6">
            <p className="text-gray-700 font-medium text-lg">Amenities</p>
            <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {(roomType1Amenties || "No amenities listed.")
                .split(", ")
                .map((amenity, index) => (
                  <li
                    key={index}
                    className="text-gray-600 flex items-center space-x-2"
                  >
                    <span className="text-blue-500">✔</span>
                    <span>{amenity}</span>
                  </li>
                ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="relative w-full mt-6">
            <img
              src={selectedImage1}
              alt="Room 1"
              className="w-full h-80 object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Image Gallery */}
          {roomType1image && roomType1image.length > 0 ? (
            <div className="flex gap-4 overflow-x-auto mt-6 py-2 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-gray-100">
              {roomType1image.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Room 1 - ${index + 1}`}
                  className={`w-28 h-28 object-cover rounded-lg cursor-pointer transition-all duration-300 hover:scale-110 ${
                    selectedImage1 === img ? "border-4 border-blue-500 shadow-md" : ""
                  }`}
                  onClick={() => setSelectedImage1(img)}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 mt-6 italic">No images available for this room.</p>
          )}

          {/* Reserve Now Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => handleBooking("room1")}
              className="bg-blue-500 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 text-lg font-semibold transform hover:scale-105"
            >
              Reserve Now
            </button>
          </div>
        </div>

        {/* Room Type 2 */}
        <div className="mt-10 bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl">
          <h4 className="text-2xl font-semibold text-gray-900 mb-4">
            {roomType2 || "Deluxe Room"}
          </h4>

          {/* Features */}
          <div className="mb-4">
            <p className="text-gray-700 font-medium text-lg">Features</p>
            <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {(roomType2Fetures || "No features listed.")
                .split(", ")
                .map((feature, index) => (
                  <li
                    key={index}
                    className="text-gray-600 flex items-center space-x-2"
                  >
                    <span className="text-blue-500">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
            </ul>
          </div>

          {/* Amenities */}
          <div className="mb-6">
            <p className="text-gray-700 font-medium text-lg">Amenities</p>
            <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {(roomType2Amenties || "No amenities listed.")
                .split(", ")
                .map((amenity, index) => (
                  <li
                    key={index}
                    className="text-gray-600 flex items-center space-x-2"
                  >
                    <span className="text-blue-500">✔</span>
                    <span>{amenity}</span>
                  </li>
                ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="relative w-full mt-6">
            <img
              src={selectedImage2}
              alt="Room 2"
              className="w-full h-80 object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Image Gallery */}
          {roomType2image && roomType2image.length > 0 ? (
            <div className="flex gap-4 overflow-x-auto mt-6 py-2 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-gray-100">
              {roomType2image.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Room 2 - ${index + 1}`}
                  className={`w-28 h-28 object-cover rounded-lg cursor-pointer transition-all duration-300 hover:scale-110 ${
                    selectedImage2 === img ? "border-4 border-blue-500 shadow-md" : ""
                  }`}
                  onClick={() => setSelectedImage2(img)}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 mt-6 italic">No images available for this room.</p>
          )}

          {/* Reserve Now Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => handleBooking("room2")}
              className="bg-blue-500 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 text-lg font-semibold transform hover:scale-105"
            >
              Reserve Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;