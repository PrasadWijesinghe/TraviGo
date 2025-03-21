import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-white backdrop-blur-md py-4 flex justify-center w-full rounded-full shadow-lg">
            <div className="w-[95%] max-w-screen-xl flex justify-between items-center">
                {/* Logo */}
                <div className="bg-blue-500 px-6 py-2 rounded-full shadow-md">
                    <Link to="/" className="text-xl font-bold text-white tracking-wide">TraviGo</Link>
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-6">
                    <Link to="/" className="text-blue-700 hover:text-blue-300 transition">Home</Link>
                    <Link to="/about" className="text-blue-700 hover:text-blue-300 transition">About</Link>
                    <Link to="/services" className="text-blue-700 hover:text-blue-300 transition">Services</Link>
                    <Link to="/contact" className="text-blue-700 hover:text-blue-300 transition">Contact</Link>
                </div>

                {/* Buttons */}
                <div className="flex space-x-3">
                    <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition">
                        Login
                    </Link>
                    <Link to="/register" className="bg-transparent border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition">
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
