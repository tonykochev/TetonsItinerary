import { Router, Request, Response } from "express";
import Hike from "../models/Hike";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const hikes = await Hike.find();
    res.json(hikes);
  } catch (err) {
    console.error("Error fetching hikes:", err);
    res.status(500).json({ message: "Failed to fetch hikes" });
  }
});

export default router;
