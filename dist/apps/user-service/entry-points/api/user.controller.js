"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserController = exports.deleteUserController = exports.updateUserController = exports.createUserController = void 0;
const user_service_1 = require("../../domain/user.service");
const createUserController = async (req, res, next) => {
    try {
        const user = await (0, user_service_1.createUser)(req.body);
        res.status(201).json(user);
    }
    catch (error) {
        next(error);
    }
};
exports.createUserController = createUserController;
const updateUserController = async (req, res, next) => {
    try {
        const user = await (0, user_service_1.updateUser)(parseInt(req.params.userId), req.body);
        res.status(200).json(user);
    }
    catch (error) {
        next(error);
    }
};
exports.updateUserController = updateUserController;
const deleteUserController = async (req, res, next) => {
    try {
        await (0, user_service_1.deleteUser)(parseInt(req.params.userId));
        res.status(204).end();
    }
    catch (error) {
        next(error);
    }
};
exports.deleteUserController = deleteUserController;
const getUserController = async (req, res, next) => {
    try {
        const user = await (0, user_service_1.getUser)(parseInt(req.params.userId));
        res.status(200).json(user);
    }
    catch (error) {
        next(error);
    }
};
exports.getUserController = getUserController;
