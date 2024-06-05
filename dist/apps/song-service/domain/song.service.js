"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSong = exports.deleteSong = exports.updateSong = exports.createSong = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createSong = async (data) => {
    return await prisma.song.create({ data });
};
exports.createSong = createSong;
const updateSong = async (songId, data) => {
    return await prisma.song.update({ where: { id: songId }, data });
};
exports.updateSong = updateSong;
const deleteSong = async (songId) => {
    await prisma.song.delete({ where: { id: songId } });
};
exports.deleteSong = deleteSong;
const getSong = async (songId) => {
    return await prisma.song.findUnique({ where: { id: songId } });
};
exports.getSong = getSong;
