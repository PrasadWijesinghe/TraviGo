import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { hotels } from "../assets/assets";

const HotelDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const hotel = hotels.find((h) => h.Id === id);
    if (!hotel) {
        return <h2 className="text-center text-red-500">Hotel not found</h2>;
    }

    const {
        Name, MainImage, Location, decs,
        roomType1, roomType1Features, roomType1Amenties, roomType1image,
        roomType2, roomType2Features, roomType2Amenties, roomType2image
    } = hotel;

    // Separate image states for each room type
    const [selectedImage1, setSelectedImage1] = useState(roomType1image?.[0] || null);
    const [selectedImage2, setSelectedImage2] = useState(roomType2image?.[0] || null);

    // Navigate to the Booking Page
    const handleBooking = (roomType) => {
        navigate(`/booking/${id}/${roomType}`);
    };

    return (
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-200">
            {/* Hotel Banner */}
            <div className="relative mb-6">
                <img src={MainImage} alt={Name} className="w-full h-96 object-cover rounded-xl shadow-lg" />
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl flex items-center justify-center">
                    <h2 className="text-4xl font-bold text-white drop-shadow-lg">{Name}</h2>
                </div>
            </div>

            {/* Hotel Details */}
            <div className="text-center">
                <p className="text-lg text-gray-700 font-medium">{Location}</p>
                <p className="text-gray-600 mt-2">{decs}</p>
            </div>

            {/* Room Details Section */}
            <h3 className="text-3xl font-semibold mt-8 text-blue-600 border-b-2 pb-2">Rooms & Facilities</h3>

            {/* Room Type 1 */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-2xl font-semibold text-gray-900">{roomType1}</h4>
                <p className="text-gray-700 mt-2">{roomType1Features}</p>
                <p className="text-gray-500 mt-2">{roomType1Amenties}</p>

                {/* Image Section */}
                <div className="relative w-full mt-4">
                    <img src={selectedImage1} alt="Room 1" className="w-full h-80 object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105" />
                </div>

                {/* Image Gallery */}
                <div className="flex gap-4 overflow-x-auto mt-4">
                    {roomType1image.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Room 1 - ${index + 1}`}
                            className={`w-24 h-24 object-cover rounded-lg cursor-pointer transition-all duration-300 hover:scale-110 ${
                                selectedImage1 === img ? "border-4 border-blue-500" : ""
                            }`}
                            onClick={() => setSelectedImage1(img)}
                        />
                    ))}
                </div>

                {/* Reserve Now Button */}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => handleBooking("room1")}
                        className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 text-lg font-semibold"
                    >
                        Reserve Now
                    </button>
                </div>
            </div>

            {/* Room Type 2 */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-2xl font-semibold text-gray-900">{roomType2}</h4>
                <p className="text-gray-700 mt-2">{roomType2Features}</p>
                <p className="text-gray-500 mt-2">{roomType2Amenties}</p>

                {/* Image Section */}
                <div className="relative w-full mt-4">
                    <img src={selectedImage2} alt="Room 2" className="w-full h-80 object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105" />
                </div>

                {/* Image Gallery */}
                <div className="flex gap-4 overflow-x-auto mt-4">
                    {roomType2image.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Room 2 - ${index + 1}`}
                            className={`w-24 h-24 object-cover rounded-lg cursor-pointer transition-all duration-300 hover:scale-110 ${
                                selectedImage2 === img ? "border-4 border-blue-500" : ""
                            }`}
                            onClick={() => setSelectedImage2(img)}
                        />
                    ))}
                </div>

                {/* Reserve Now Button */}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => handleBooking("room2")}
                        className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 text-lg font-semibold"
                    >
                        Reserve Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;
