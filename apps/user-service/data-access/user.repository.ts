import { Pool } from "pg";
const pool = new Pool();

export const createUser = async (data: { name: string; email: string }) => {
  const result = await pool.query(
    'INSERT INTO "User" (name, email, "createdAt", "updatedAt") VALUES ($1, $2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING *',
    [data.name, data.email]
  );
  return result.rows[0];
};

export const updateUser = async (
  userId: number,
  data: { name?: string; email?: string }
) => {
  const result = await pool.query(
    'UPDATE "User" SET name = $1, email = $2, "updatedAt" = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *',
    [data.name, data.email, userId]
  );
  return result.rows[0];
};

export const deleteUser = async (userId: number) => {
  await pool.query('DELETE FROM "User" WHERE id = $1', [userId]);
};

export const findUserById = async (userId: number) => {
  const result = await pool.query('SELECT * FROM "User" WHERE id = $1', [
    userId,
  ]);
  return result.rows[0];
};
