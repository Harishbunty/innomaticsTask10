const express = require('express');
const {
  getUserProfile,
  updateUserProfile,
  getUserOrders,
} = require('../controllers/userController');
//const { protect } = require('../middlewares/authMiddleware');
const { registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();

// User profile routes
router.get('/profile', getUserProfile);
router.put('/profile', updateUserProfile);
// User registration route
router.post('/register', registerUser);

// User login route
router.post('/login', loginUser);
// User order history
router.get('/orders', getUserOrders);

module.exports = router;
