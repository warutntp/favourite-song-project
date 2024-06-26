import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const createUser = async (data: { name: string; email: string }) => {
  return await prisma.user.create({ data });
};

export const updateUser = async (
  userId: number,
  data: { name?: string; email?: string }
) => {
  return await prisma.user.update({ where: { id: userId }, data });
};

export const deleteUser = async (userId: number) => {
  return await prisma.user.delete({ where: { id: userId } });
};

export const getUserById = async (userId: number) => {
  return await prisma.user.findUnique({ where: { id: userId } });
};

export const getUsers = async () => {
  return await prisma.user.findMany();
};
