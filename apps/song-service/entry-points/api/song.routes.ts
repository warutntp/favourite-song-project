import { Router } from "express";
import {
  createSongController,
  updateSongController,
  deleteSongController,
  getSongController,
} from "./song.controller";

const router = Router();

router.post("/songs", createSongController);
router.patch("/songs/:songId", updateSongController);
router.delete("/songs/:songId", deleteSongController);
router.get("/songs/:songId", getSongController);

export default router;
