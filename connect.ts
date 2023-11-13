import { Client } from 'pg';
import 'dotenv/config';

export const connectDB = async () => {
  const client = new Client({
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE
  });
  await client.connect();
  const res = await client.query('SELECT $1::text as connected', [
    'Connection to postgres successful!'
  ]);
  console.log(res.rows[0].connected);
  await client.end();
};
