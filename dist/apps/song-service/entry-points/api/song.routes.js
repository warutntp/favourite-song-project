"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const song_controller_1 = require("./song.controller");
const router = (0, express_1.Router)();
router.post("/songs", song_controller_1.createSongController);
router.patch("/songs/:songId", song_controller_1.updateSongController);
router.delete("/songs/:songId", song_controller_1.deleteSongController);
router.get("/songs/:songId", song_controller_1.getSongController);
exports.default = router;
