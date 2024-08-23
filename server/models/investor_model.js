// models/investor_model.js
import mongoose from "mongoose";

const investorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  image_url: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});

const Investor = mongoose.model("Investor", investorSchema);

export default Investor;
