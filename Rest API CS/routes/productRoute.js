const express = require('express');

const { addProduct, deleteProductById, getAllProducts, updateProduct, getProductByTitle, getProductByCategory } = require('../controllers/productController');
const router = express.Router();
router.post('/add', addProduct);
router.get('/get', getAllProducts);
router.get('/get/:title', getProductByTitle);
router.get('/category/:category', getProductByCategory);
router.delete('/delete/:id', deleteProductById);
router.put('/update/:id', updateProduct);

module.exports = router;