import { NextFunction, Request, Response } from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  getUser,
} from "../../domain/user.service";

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
    const user = await getUser(parseInt(req.params.userId));
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
