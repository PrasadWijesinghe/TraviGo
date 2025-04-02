<<<<<<< Updated upstream
=======
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./config/db"); // From first file
const adminRoutes = require("./routes/api"); // From first file
const bookingRoutes = require("./routes/bookingRoutes"); // From second file
const hotelRoutes = require("./routes/hotelRoutes"); // From second file

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true, // From first file
  })
);

app.use(express.json({ limit: "50mb" })); // From second file
app.use("/uploads", express.static("uploads")); // From first file

// Routes
app.use("/api", adminRoutes); // From first file
app.use("/api/bookings", bookingRoutes); // From second file
app.use("/api/hotels", hotelRoutes); // From second file
app.get("/", (req, res) => res.status(200).send("API is running")); // From second file

const startServer = async () => {
  try {
    await connectDB(); // From both files (assumed compatible)
    app.listen(port, () => {
      console.log(`Server running on PORT: ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
>>>>>>> Stashed changes
