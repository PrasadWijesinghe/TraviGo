import Booking from "../models/bookingModel.js";

const bookingHotel = async (req, res) => {
    try {
        console.log("Received Data:", req.body);  

        const {
            hotelId,
            userId,
            Email,
            bookingStartDate,
            bookingEndDate,
            bookingPrice,
            PhoneNumber,
            specialRequests,
            Arrived,
        } = req.body;

        // ✅ Check if all fields are provided
        if (!hotelId || !userId || !Email || !bookingStartDate || !bookingEndDate || !bookingPrice || !PhoneNumber) {
            return res.status(400).json({ message: "All required fields must be filled" });
        }

        // ✅ Create a new booking
        const newBooking = new Booking({
            hotelId,
            userId,
            Email,
            bookingStartDate,
            bookingEndDate,
            bookingPrice,
            PhoneNumber,
            specialRequests,
            Arrived,
        });

        await newBooking.save();
        res.status(201).json({ message: "Booking successful", booking: newBooking });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error, please try again later" });
    }
};

export { bookingHotel };