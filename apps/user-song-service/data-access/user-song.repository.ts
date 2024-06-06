import { Pool } from "pg";
const pool = new Pool();

export const addFavoriteSong = async (userId: number, songId: number) => {
  await pool.query(
    'INSERT INTO "user-songs" ("user_id", "song_id") VALUES ($1, $2)',
    [userId, songId]
  );
};

export const removeFavoriteSong = async (userId: number, songId: number) => {
  await pool.query(
    'DELETE FROM "user-songs" WHERE "user_id" = $1 AND "song_id" = $2',
    [userId, songId]
  );
};

export const findFavoriteSongsByUserId = async (userId: number) => {
  const result = await pool.query(
    `SELECT s.* FROM "user-songs" us
     JOIN "songs" s ON us."song_id" = s.id
     WHERE us."user_id" = $1`,
    [userId]
  );
  return result.rows;
};
