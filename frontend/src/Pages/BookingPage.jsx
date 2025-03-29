import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MessageModal from "../Components/MessageModal";

const BookingPage = () => {
  const { id, roomType } = useParams();
  const navigate = useNavigate();
  const [modal, setModal] = useState({ isOpen: false, message: "", type: "" });

  const handleBooking = async (event) => {
    event.preventDefault();
    const bookingData = {
      hotelId: id,
      roomType: roomType,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      phoneNumber: event.target.phoneNumber.value,
      checkInDate: event.target.checkInDate.value,
      checkOutDate: event.target.checkOutDate.value,
      specialRequests: event.target.specialRequests.value,
    };

    try {
      const response = await fetch("http://localhost:3000/api/bookings/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });
      const data = await response.json();

      if (response.ok) {
        setModal({
          isOpen: true,
          message: "Booking Successful! Proceeding to payment.",
          type: "success",
        });
        setTimeout(() => navigate("/payment", { state: { bookingData, amount: 100 } }), 2000);
      } else {
        setModal({ isOpen: true, message: data.message || "Error processing booking", type: "error" });
      }
    } catch (error) {
      setModal({ isOpen: true, message: `Network error: ${error.message}`, type: "error" });
    }
  };

  const closeModal = () => setModal({ ...modal, isOpen: false });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A1931] to-[#05101E] flex items-center justify-center py-12">
      <div className="w-full max-w-3xl bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-8">
        <h2 className="text-4xl font-bold text-[#D4AF37] font-playfair text-center mb-8">
          Reserve Your Stay
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleBooking}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="p-4 bg-[#F5F5F5] rounded-lg text-[#0A1931] focus:ring-2 focus:ring-[#D4AF37] outline-none"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="p-4 bg-[#F5F5F5] rounded-lg text-[#0A1931] focus:ring-2 focus:ring-[#D4AF37] outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="p-4 bg-[#F5F5F5] rounded-lg text-[#0A1931] focus:ring-2 focus:ring-[#D4AF37] outline-none col-span-2"
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            className="p-4 bg-[#F5F5F5] rounded-lg text-[#0A1931] focus:ring-2 focus:ring-[#D4AF37] outline-none"
            required
          />
          <input
            type="date"
            name="checkInDate"
            className="p-4 bg-[#F5F5F5] rounded-lg text-[#0A1931] focus:ring-2 focus:ring-[#D4AF37] outline-none"
            required
          />
          <input
            type="date"
            name="checkOutDate"
            className="p-4 bg-[#F5F5F5] rounded-lg text-[#0A1931] focus:ring-2 focus:ring-[#D4AF37] outline-none"
            required
          />
          <textarea
            name="specialRequests"
            placeholder="Special Requests"
            className="p-4 bg-[#F5F5F5] rounded-lg text-[#0A1931] focus:ring-2 focus:ring-[#D4AF37] outline-none col-span-2"
          />
          <button
            type="submit"
            className="col-span-2 bg-[#D4AF37] text-[#0A1931] py-4 rounded-lg text-lg font-semibold hover:bg-[#E6C567] transition-colors"
          >
            Confirm Booking
          </button>
        </form>
      </div>
      {modal.isOpen && <MessageModal message={modal.message} type={modal.type} onClose={closeModal} />}
    </div>
  );
};

export default BookingPage;