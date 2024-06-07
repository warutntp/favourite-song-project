import { Router } from "express";
import {
  addUserSongController,
  deleteUserSongController,
  getUserSongsController,
} from "../domain/user-song.controller";

const router = Router();

router.post("/users/:userId/songs/:songId", addUserSongController);
router.delete("/users/:userId/songs/:songId", deleteUserSongController);
router.get("/users/:userId/songs", getUserSongsController);

export default router;
