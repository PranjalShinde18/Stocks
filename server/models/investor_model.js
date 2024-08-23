import mongoose from "mongoose";

const InvestorSchema = new mongoose.Schema({
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

const Investor = mongoose.model("Investor", InvestorSchema);

export default Investor;
