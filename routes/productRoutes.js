const express = require('express');
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const { protect, adminOnly } = require('../middlewares/authMiddleware');

const router = express.Router();

// Public routes
router.get('/', getProducts);
router.get('/:id', getProductById);

// Admin-only routes
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
console.log(createProduct); // Should log the function definition

console.log('Protect:', protect);
console.log('Admin Only:', adminOnly);

module.exports = router;
router.post('/test', (req, res) => {
  res.status(200).json({ message: 'Test route works!' });
});
