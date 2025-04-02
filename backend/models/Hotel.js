import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  imageArray: [String],
  price: { type: Number, required: true },
  description: { type: String, required: true },
  phone: { type: String }, // Added phone
  email: { type: String }, // Added email
  rooms: [
    {
      type: { type: String, required: true },
      features: { type: String, required: true },
      amenities: { type: String, required: true },
      images: [String],
      price: { type: Number, required: true },
      size: { type: String },
      occupancy: { type: String },
      perks: { type: String },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Hotel", hotelSchema);