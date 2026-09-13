import Bus from '../models/busModel.js';
import QueryBuilder from '../utils/queryBuilder.js';

// Get All Buses
export const getAllBuses = async (req, res) => {
  try {
    const busQuery = new QueryBuilder(Bus.find(), { ...req.query })
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const buses = await busQuery.query;

    res.status(200).json({
      status: 'success',
      results: buses.length,
      data: {
        buses,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Get certain Bus
export const getBus = async (req, res) => {
  try {
    const bus = await Bus.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        bus,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Create Bus
export const createBus = async (req, res) => {
  try {
    const bus = await Bus.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        bus,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Update Bus
export const updateBus = async (req, res) => {
  try {
    const bus = await Bus.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        bus,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Delete Bus
export const deleteBus = (req, res) => {
  try {
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
