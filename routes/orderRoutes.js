const express = require('express');
const { placeOrder, getOrders } = require('../controllers/orderController');
//const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', placeOrder);
router.get('/', getOrders);

module.exports = router;
