import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import hotelRoutes from "./routes/hotelRoutes.js"; // Add this

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
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], // Add PUT
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json({ limit: "50mb" }));

app.use("/api/bookings", bookingRoutes);
app.use("/api/hotels", hotelRoutes); // Add this

app.get("/", (req, res) => res.status(200).send("API is running"));

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server running on PORT: ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();