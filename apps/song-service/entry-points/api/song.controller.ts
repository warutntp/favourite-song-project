import { NextFunction, Request, Response } from "express";
import {
  createSong,
  updateSong,
  deleteSong,
  getSongById,
  getSongs,
} from "../../domain/song.service";

export const createSongController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const song = await createSong(req.body);
    res.status(201).json(song);
  } catch (error) {
    next(error);
  }
};

export const updateSongController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const song = await updateSong(parseInt(req.params.songId), req.body);
    res.status(200).json(song);
  } catch (error) {
    next(error);
  }
};

export const deleteSongController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await deleteSong(parseInt(req.params.songId));
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export const getSongController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const song = await getSongById(parseInt(req.params.songId));
    res.status(200).json(song);
  } catch (error) {
    next(error);
  }
};

export const getSongsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const song = await getSongs();
    res.status(200).json(song);
  } catch (error) {
    next(error);
  }
};
