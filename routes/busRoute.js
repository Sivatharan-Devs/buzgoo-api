import express from 'express';
import {
  getAllBuses,
  createBus,
  getBus,
  updateBus,
  deleteBus,
} from '../controllers/busController.js';

const router = express.Router();

router.route('/').get(getAllBuses).post(createBus);
router.route('/:id').get(getBus).patch(updateBus).delete(deleteBus);

export default router;
