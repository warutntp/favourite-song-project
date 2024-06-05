"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserSongsController = exports.deleteUserSongController = exports.addUserSongController = void 0;
const user_song_service_1 = require("../../domain/user-song.service");
const addUserSongController = async (req, res, next) => {
    try {
        const userId = parseInt(req.params.userId);
        const songId = parseInt(req.params.songId);
        await (0, user_song_service_1.addFavoriteSong)(userId, songId);
        res.status(201).end();
    }
    catch (error) {
        next(error);
    }
};
exports.addUserSongController = addUserSongController;
const deleteUserSongController = async (req, res, next) => {
    try {
        const userId = parseInt(req.params.userId);
        const songId = parseInt(req.params.songId);
        await (0, user_song_service_1.removeFavoriteSong)(userId, songId);
        res.status(204).end();
    }
    catch (error) {
        next(error);
    }
};
exports.deleteUserSongController = deleteUserSongController;
const getUserSongsController = async (req, res, next) => {
    try {
        const userId = parseInt(req.params.userId);
        const songs = await (0, user_song_service_1.getFavoriteSongs)(userId);
        res.status(200).json(songs);
    }
    catch (error) {
        next(error);
    }
};
exports.getUserSongsController = getUserSongsController;
