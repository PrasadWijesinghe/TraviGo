import React from "react";
import { hotels } from "../assets/assets";
import HotelItem from "../Components/HotelItem";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";

const HotelCollection = () => {
  return (
    <div
      className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500"
      style={{
        backgroundImage: "radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, rgba(59, 130, 246, 0.2) 70%, rgba(29, 78, 216, 0.1) 100%)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="w-[90%] max-w-screen-xl mt-8">
        <Navbar />
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 text-center mt-7 mb-6">
          Discover Your Perfect Stay
        </h1>
        <div className="flex justify-center w-full mb-6">
          <SearchBar />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
          {hotels.map((hotel) => (
            <HotelItem key={hotel.Id} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelCollection;