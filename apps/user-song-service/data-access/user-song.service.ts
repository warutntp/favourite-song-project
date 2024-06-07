import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const addFavoriteSong = async (userId: number, songId: number) => {
  return await prisma.userSong.create({ data: { userId, songId } });
};

export const removeFavoriteSong = async (userId: number, songId: number) => {
  return await prisma.userSong.delete({
    where: { userId_songId: { userId, songId } },
  });
};

export const getFavoriteSongs = async (userId: number) => {
  return await prisma.userSong.findMany({
    where: { userId },
    include: { song: true },
  });
};
