import { Pool } from "pg";
const pool = new Pool();

export const createSong = async (data: { name: string }) => {
  const result = await pool.query(
    'INSERT INTO "Song" (name, "createdAt", "updatedAt") VALUES ($1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING *',
    [data.name]
  );
  return result.rows[0];
};

export const updateSong = async (songId: number, data: { name?: string }) => {
  const result = await pool.query(
    'UPDATE "Song" SET name = $1, "updatedAt" = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
    [data.name, songId]
  );
  return result.rows[0];
};

export const deleteSong = async (songId: number) => {
  await pool.query('DELETE FROM "Song" WHERE id = $1', [songId]);
};

export const findSongById = async (songId: number) => {
  const result = await pool.query('SELECT * FROM "Song" WHERE id = $1', [
    songId,
  ]);
  return result.rows[0];
};
