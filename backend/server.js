import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import rentalRoutes from "./routes/rentalRoutes.js";
import paymentRoutes from "./routes/payment.js";
import vehicleRoutes from "./routes/vehicleRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Request Logging Middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Routes
app.use("/api", rentalRoutes);
app.use("/api", paymentRoutes);
app.use("/api", vehicleRoutes); // No multer middleware here; handled in vehicleRoutes.js

// Basic route to test server
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Global Error Handler
app.use((err, req, res, next) => {
  const errorDetails = {
    message: err.message,
    stack: err.stack,
    method: req.method,
    path: req.path,
  };
  console.error("Error Details:", errorDetails);
  res.status(500).json({
    error: "Something went wrong!",
    details: err.message, // Send specific error message to client
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});