import express from 'express';
import {
  getAllF1Drivers,
  getF1DriverById,
  createF1Driver,
  updateF1Driver,
  deleteF1Driver
} from '../controllers/f1DriverController.js';

const router = express.Router();

router.get('/f1drivers', getAllF1Drivers);
router.get('/f1drivers/:id', getF1DriverById);
router.post('/f1drivers', createF1Driver);
router.put('/f1drivers/:id', updateF1Driver);
router.delete('/f1drivers/:id', deleteF1Driver);
export { router };

