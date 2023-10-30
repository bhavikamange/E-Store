import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/', (req: any, res: any) => {
  res.send('Hello from your Node.js server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});