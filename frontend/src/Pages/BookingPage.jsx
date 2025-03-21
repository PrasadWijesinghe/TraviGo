import React from "react";
import { useParams } from "react-router-dom";

const BookingPage = () => {
    const { id, roomType } = useParams();

    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            <div className="relative z-10 max-w-5xl mx-auto p-8 flex gap-8 mt-12 bg-white bg-opacity-70 backdrop-blur-lg rounded-xl shadow-xl">
                {/* Left Section - Hotel Info */}
                <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800">The Grand Horizon</h2>
                    <p className="text-gray-600">28, Church Street, Galle Fort</p>
                    <p className="text-blue-500 font-semibold">⭐ Excellent - 119 reviews</p>
                    <ul className="mt-4 text-gray-700">
                        <li>✅ Free WiFi</li>
                        <li>✅ Airport Shuttle</li>
                        <li>✅ Breakfast Included</li>
                    </ul>
                    <div className="mt-6 border-t pt-4 text-gray-700">
                        <h4 className="font-semibold">Your Booking Details</h4>
                        <p><strong>Check-in:</strong> Tue 4 Mar 2025 - 14:00</p>
                        <p><strong>Check-out:</strong> Wed 5 Mar 2025 - 11:00</p>
                        <p><strong>Total length:</strong> 1 night</p>
                    </div>
                </div>

                {/* Right Section - Booking Form */}
                <div className="w-2/3 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold text-blue-700">Book Your Room</h2>
                    <p className="text-gray-600">You're booking <span className="font-semibold">{roomType}</span> for hotel ID <span className="text-blue-500">{id}</span></p>
                    
                    <form className="mt-6 grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="p-3 border rounded-lg w-full" required />
                        <input type="text" placeholder="Last Name" className="p-3 border rounded-lg w-full" required />
                        <input type="email" placeholder="Email Address" className="p-3 border rounded-lg w-full col-span-2" required />
                        <select className="p-3 border rounded-lg w-full">
                            <option>Country</option>
                            <option>USA</option>
                            <option>UK</option>
                            <option>Canada</option>
                        </select>
                        <input type="tel" placeholder="Phone Number" className="p-3 border rounded-lg w-full" required />
                        <textarea placeholder="Special Requests" className="p-3 border rounded-lg w-full col-span-2"></textarea>
                        <input type="time" className="p-3 border rounded-lg w-full" />
                    </form>
                    
                    <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg w-full text-lg font-semibold hover:bg-blue-700 transition">Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
