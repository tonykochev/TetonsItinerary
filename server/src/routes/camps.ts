import express from "express";
import Camp from "../models/Camp";

const router = express.Router();

router.get("/", async (req, res) => {
  const camps = await Camp.find();
  res.json(camps);
});

export default router;