import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createSong = async (data: { name: string }) => {
  return await prisma.song.create({ data });
};

export const updateSong = async (songId: number, data: { name?: string }) => {
  return await prisma.song.update({ where: { id: songId }, data });
};

export const deleteSong = async (songId: number) => {
  await prisma.song.delete({ where: { id: songId } });
};

export const getSongById = async (songId: number) => {
  return await prisma.song.findUnique({ where: { id: songId } });
};

export const getSongs = async () => {
  return await prisma.song.findMany();
};
