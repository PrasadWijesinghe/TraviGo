// backend/routes/bookingRoutes.js
import express from 'express';
import Booking from '../models/Booking.js';  // Assuming you have a Booking model

const router = express.Router();

// POST request handler for booking
router.post("/book", async (req, res) => {
    try {
        console.log("Incoming booking request:", req.body);  // Log the incoming request
        const newBooking = new Booking(req.body);
        await newBooking.save();
        res.status(200).json({ message: "Booking successful!" });
    } catch (error) {
        console.error("Error saving booking:", error);
        res.status(500).json({ message: "Error processing booking" });
    }
});

export default router;
