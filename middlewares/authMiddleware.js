/*const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorHandler');
const { jwtSecret } = require('../config/appConfig');

// Authenticate the user using JWT
exports.protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new ErrorHandler('Not authorized to access this resource', 401));
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = await User.findById(decoded.id);
    if (!req.user) {
      return next(new ErrorHandler('User not found', 401));
    }
    console.log('Protect middleware executed');
    next();
  } catch (error) {
    next(new ErrorHandler('Not authorized to access this resource', 401));
  }
};

// Restrict access to admin users
exports.adminOnly = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return next(new ErrorHandler('Access restricted to administrators', 403));
  }
  console.log('Admin middleware executed');
  next();
};
console.log('Exports from authMiddleware:', module.exports);
*/