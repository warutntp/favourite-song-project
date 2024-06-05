"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.deleteUser = exports.updateUser = exports.createUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createUser = async (data) => {
    return await prisma.user.create({ data });
};
exports.createUser = createUser;
const updateUser = async (userId, data) => {
    return await prisma.user.update({ where: { id: userId }, data });
};
exports.updateUser = updateUser;
const deleteUser = async (userId) => {
    await prisma.user.delete({ where: { id: userId } });
};
exports.deleteUser = deleteUser;
const getUser = async (userId) => {
    return await prisma.user.findUnique({ where: { id: userId } });
};
exports.getUser = getUser;
