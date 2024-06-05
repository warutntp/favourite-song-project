"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSongController = exports.deleteSongController = exports.updateSongController = exports.createSongController = void 0;
const song_service_1 = require("../../domain/song.service");
const createSongController = async (req, res, next) => {
    try {
        const song = await (0, song_service_1.createSong)(req.body);
        res.status(201).json(song);
    }
    catch (error) {
        next(error);
    }
};
exports.createSongController = createSongController;
const updateSongController = async (req, res, next) => {
    try {
        const song = await (0, song_service_1.updateSong)(parseInt(req.params.songId), req.body);
        res.status(200).json(song);
    }
    catch (error) {
        next(error);
    }
};
exports.updateSongController = updateSongController;
const deleteSongController = async (req, res, next) => {
    try {
        await (0, song_service_1.deleteSong)(parseInt(req.params.songId));
        res.status(204).end();
    }
    catch (error) {
        next(error);
    }
};
exports.deleteSongController = deleteSongController;
const getSongController = async (req, res, next) => {
    try {
        const song = await (0, song_service_1.getSong)(parseInt(req.params.songId));
        res.status(200).json(song);
    }
    catch (error) {
        next(error);
    }
};
exports.getSongController = getSongController;
