import express from 'express';
import categoryController from '../../controllers/category/category.controller';

const router = express.Router();

router.get('/', categoryController.list);
router.get('/:id', categoryController.getById);

export default router;
