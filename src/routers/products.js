import { Router } from 'express';
import {
  deleteProductController,
  getAllProductsController,
  getProductByIdController,
  postProductController,
  updateProductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
const router = Router();

router.get('/products', ctrlWrapper(getAllProductsController));
router.get('/products/:productId', ctrlWrapper(getProductByIdController));
router.post('/products', ctrlWrapper(postProductController));
router.patch('/products/:productId', ctrlWrapper(updateProductController));
router.delete('/products/:productId', ctrlWrapper(deleteProductController));

export default router;
