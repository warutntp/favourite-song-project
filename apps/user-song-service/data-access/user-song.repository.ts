import { Pool } from "pg";
const pool = new Pool();

export const addFavoriteSong = async (userId: number, songId: number) => {
  await pool.query(
    'INSERT INTO "UserSong" ("userId", "songId") VALUES ($1, $2)',
    [userId, songId]
  );
};

export const removeFavoriteSong = async (userId: number, songId: number) => {
  await pool.query(
    'DELETE FROM "UserSong" WHERE "userId" = $1 AND "songId" = $2',
    [userId, songId]
  );
};

export const findFavoriteSongsByUserId = async (userId: number) => {
  const result = await pool.query(
    `SELECT s.* FROM "UserSong" us
     JOIN "Song" s ON us."songId" = s.id
     WHERE us."userId" = $1`,
    [userId]
  );
  return result.rows;
};
