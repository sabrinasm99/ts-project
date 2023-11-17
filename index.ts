import express, { Request, Response, json } from 'express';
import { client, connectDB } from './connect';
import { v4 } from 'uuid';

const app = express();
const port = process.env.APP_PORT || 5000;

process.on('SIGINT', () => {
  console.log('Close the app...');
  process.exit();
});

app.use(json());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome Friends');
});

app.post('/insert', async (req: Request, res: Response) => {
  const id = v4();
  const { name, experience } = req.body;

  const text =
    'INSERT into doctors(id, name, experience) VALUES($1, $2, $3) RETURNING *';
  const value = [id, name, experience];

  await client.query(text, value);

  res.json({
    message: 'SUCCESS INSERT'
  });
});

(async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
})();
