import express, { Request, Response } from 'express';
import { connectDB } from './connect';

const app = express();
const port = process.env.APP_PORT || 5000;

process.on('SIGINT', () => {
  console.log('Close the app...');
  process.exit();
});

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome Friends');
});

(async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
})();
