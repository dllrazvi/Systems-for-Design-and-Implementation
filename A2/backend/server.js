import express from 'express';
import { router as f1DriverRoutes } from './routes/f1DriverRoutes.js';
import { router as teamRoutes } from './routes/teamRoutes.js';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/api', f1DriverRoutes);
app.use('/api', teamRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
