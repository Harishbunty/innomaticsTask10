const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

// Route imports
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes'); // Added userRoutes

// Config
dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// API routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes); // Registered userRoutes

// Error Middleware
app.use(express.json()); // for parsing application/json
app.use(cors()); 
// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const path = require('path');
console.log('Resolved productController path:', path.resolve(__dirname, '../controllers/productController.js'));
