import { db } from "../db.js";
import Investor from "../models/investor_model.js";
export const getAllInvestors = async (req, res) => {
  try {
    const investors = await Investor.find();
    res.status(200).json(investors);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
