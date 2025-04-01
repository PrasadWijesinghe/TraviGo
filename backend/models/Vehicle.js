import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true }, // URL string
  imageArray: { type: [String], default: [] }, // Array of URL strings
  price: { type: Number, required: true }, // Changed to Number
  engine: { type: String, required: true },
  doors: { type: Number, required: true }, // Changed to Number
  seats: { type: Number, required: true }, // Changed to Number
  fuel: { type: String, required: true },
  transmission: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.model("Vehicle", vehicleSchema);