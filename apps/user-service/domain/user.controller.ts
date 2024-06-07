import { NextFunction, Request, Response } from "express";
import {
  updateUser,
  createUser,
  deleteUser,
  getUserById,
  getUsers,
} from "../data-access/user.service";

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const updateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await updateUser(parseInt(req.params.userId), req.body);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const deleteUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await deleteUser(parseInt(req.params.userId));
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export const getUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getUserById(parseInt(req.params.userId));
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const getUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getUsers();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
