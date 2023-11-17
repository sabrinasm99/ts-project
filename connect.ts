import { Client } from 'pg';
import 'dotenv/config';

export const clientProp = {
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE
};

export const client = new Client(clientProp);

export const connectDB = async () => {
  await client.connect();
  const res = await client.query('SELECT $1::text as connected', [
    'Connection to postgres successful!'
  ]);
  console.log(res.rows[0].connected);
};
