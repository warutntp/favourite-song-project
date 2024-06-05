"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFavoriteSongs = exports.removeFavoriteSong = exports.addFavoriteSong = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const addFavoriteSong = async (userId, songId) => {
    return await prisma.userSong.create({ data: { userId, songId } });
};
exports.addFavoriteSong = addFavoriteSong;
const removeFavoriteSong = async (userId, songId) => {
    return await prisma.userSong.delete({
        where: { userId_songId: { userId, songId } },
    });
};
exports.removeFavoriteSong = removeFavoriteSong;
const getFavoriteSongs = async (userId) => {
    return await prisma.userSong.findMany({
        where: { userId },
        include: { song: true },
    });
};
exports.getFavoriteSongs = getFavoriteSongs;
