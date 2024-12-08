const Order = require('../models/orderModel');
const Cart = require('../models/cartModel');
const ErrorHandler = require('../utils/errorHandler');

// Place an order
exports.placeOrder = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart || cart.items.length === 0) {
  return res.status(200).json({
    success: false,
    message: 'Cart is empty', // You can return a message but no error
  });
    }

    const order = await Order.create({
      user: req.user._id,
      items: cart.items,
      totalAmount: cart.items.reduce(
        (sum, item) => sum + item.quantity * item.product.price,
        0
      ),
      shippingAddress: req.body.shippingAddress,
    });

    await Cart.findOneAndDelete({ user: req.user._id });

    res.status(201).json({
      success: true,
      order,
    });
  } catch (error) {
    next(error);
  }
};

// Get a user's orders
exports.getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate('items.product', 'name price');
    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    next(error);
  }
};
