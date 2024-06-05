import { NextFunction, Request, Response } from "express";
import {
  addFavoriteSong,
  removeFavoriteSong,
  getFavoriteSongs,
} from "../../domain/user-song.service";

export const addUserSongController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = parseInt(req.params.userId);
    const songId = parseInt(req.params.songId);
    await addFavoriteSong(userId, songId);
    res.status(201).end();
  } catch (error) {
    next(error);
  }
};

export const deleteUserSongController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = parseInt(req.params.userId);
    const songId = parseInt(req.params.songId);
    await removeFavoriteSong(userId, songId);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export const getUserSongsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = parseInt(req.params.userId);
    const songs = await getFavoriteSongs(userId);
    res.status(200).json(songs);
  } catch (error) {
    next(error);
  }
};
