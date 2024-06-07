import { Router } from "express";
import {
  createSongController,
  updateSongController,
  deleteSongController,
  getSongController,
  getSongsController,
} from "../domain/song.controller";

const router = Router();

router.post("/songs", createSongController);
router.patch("/songs/:songId", updateSongController);
router.delete("/songs/:songId", deleteSongController);
router.get("/songs/:songId", getSongController);
router.get("/songs", getSongsController);

export default router;
