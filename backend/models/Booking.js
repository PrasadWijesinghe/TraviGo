// backend/models/Booking.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    hotelId: { type: String, required: true },
    roomType: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    specialRequests: { type: String },
    status: { type: String, default: 'pending' }
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);