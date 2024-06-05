"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_song_controller_1 = require("./user-song.controller");
const router = (0, express_1.Router)();
router.post("/users/:userId/songs/:songId", user_song_controller_1.addUserSongController);
router.delete("/users/:userId/songs/:songId", user_song_controller_1.deleteUserSongController);
router.get("/users/:userId/songs", user_song_controller_1.getUserSongsController);
exports.default = router;
