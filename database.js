import mysql from 'mysql2/promise';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from './config.js';

export const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  user: DB_USER,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
});



// export async function getUserById(id) {
//   const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
//   return rows[0];
// }

// getUserById(1);