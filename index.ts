import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome Friends');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

process.on('SIGINT', () => {
  console.log('Close the app...');
  process.exit();
});
