// backend/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import bookingRoutes from './routes/bookingRoutes.js'; // Import the booking routes
import paymentRoutes from "./routes/paymentRoutes.js";

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

// Database connection
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Mount booking routes
app.use('/api/bookings', bookingRoutes);  // Ensure this is correctly mounted

// Mount payment routes
app.use("/api/payments", paymentRoutes);

app.get('/', (req, res) => res.status(200).send('API is running'));

// Debugging - Check if Stripe Key is loaded
console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_KEY ? "Loaded" : "Not Loaded");

app.listen(port, () => {
    console.log(`Server running on PORT: ${port}`);
});