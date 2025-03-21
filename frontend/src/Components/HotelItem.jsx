import React from "react";
import { Link } from "react-router-dom";


const HotelItem = ({ hotel }) => {
    return (
        <div className="bg-white backdrop-blur-lg rounded-lg shadow-xl p-6 transform hover:scale-105 transition-all duration-300 flex flex-col h-full">
            <img src={hotel.Image} alt={hotel.Name} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-3 text-blue-700 truncate">{hotel.Name}</h3>
            <p className="text-gray-300">{hotel.Location}</p>
            <div className="flex items-center text-blue-400 mt-2">⭐⭐⭐⭐⭐</div>
            <p className="text-blue-300 font-bold text-lg">${hotel.Price}</p>
            
            <div className="mt-auto">
                <Link to={`/hotel/${hotel.Id}`} className="block bg-blue-500 text-white text-center py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default HotelItem;
