// Get All Busses
export const getAllBuses = (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      data: {
        message: 'This will return all busses 🚌',
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Get certain Bus
export const getBus = (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      data: {
        message: 'This will return a requested bus details 🚌',
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
export const createBus = (req, res) => {
  try {
    res.status(201).json({
      status: 'success',
      data: {
        message: 'This will create new bus',
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
export const updateBus = (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      data: {
        message: 'This will update existing bus',
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
