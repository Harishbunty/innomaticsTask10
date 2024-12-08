/*const ErrorHandler = require('../utils/errorHandler');

// Catch-all error middleware
const errorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
};

module.exports = errorMiddleware;
*/