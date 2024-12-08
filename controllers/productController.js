const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorHandler');

// Create a new product (Admin only)
exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    next(error);
  }
};

// Get all products with search and filter
exports.getProducts = async (req, res, next) => {
  const { search, category, minPrice, maxPrice } = req.query;

  const query = {};

  if (search) query.name = { $regex: search, $options: 'i' };
  if (category) query.category = category;
  if (minPrice || maxPrice) query.price = { $gte: minPrice || 0, $lte: maxPrice || Infinity };

  try {
    const products = await Product.find(query);
    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    next(error);
  }
};

// Get a single product by ID
exports.getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return next('Product not found', 404);
    }
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    next(error);
  }
};

// Update a product (Admin only)
exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
  return res.status(200).json({
    success: false,
    message: 'product not found', // You can return a message but no error
  });
}

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a product (Admin only)
exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
  return res.status(200).json({
    success: false,
    message: 'product not found', // You can return a message but no error
  });
    }

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

console.log('Exports from productController:', module.exports);
