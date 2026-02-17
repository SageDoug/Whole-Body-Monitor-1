import express from "express";
import HealthData from "../models/HealthData.js";

const router = express.Router();

// POST new health data
router.post("/", async (req, res) => {
  try {
    const data = new HealthData(req.body);
    await data.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET latest health data
router.get("/latest", async (req, res) => {
  const data = await HealthData.findOne().sort({ createdAt: -1 });
  res.json(data);
});

export default router;
