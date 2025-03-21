import React from "react";
import { hotels } from "../assets/assets";
import HotelItem from "../Components/HotelItem";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
import { assets } from "../assets/assets";

const HotelCollection = () => {
    return (
        <div
            className="flex flex-col items-center w-full min-h-screen"
            style={{
                background: `linear-gradient(to bottom, rgba(10, 25, 47, 0.7), rgba(5, 15, 30, 0.9)), 
                url(${assets.wallpaper2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Glass Effect Container */}
            <div className="w-[85%] max-w-screen-xl bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 mt-6">
                <Navbar />
                <div className="flex w-full mt-6">
                    <SearchBar />
                </div>
                <div className="grid grid-cols-4 gap-8 py-10">
                    {hotels.map((hotel) => (
                        <HotelItem key={hotel.Id} hotel={hotel} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HotelCollection;
