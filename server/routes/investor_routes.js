import express from "express";
import { getAllInvestors } from "../controllers/investor_controller.js";

const router = express.Router();

router.get("/", getAllInvestors);
// router.get("/:id", getInvestorById);

export default router;
