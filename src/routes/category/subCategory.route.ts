import express from 'express';
import subCategoryController from '../../controllers/category/subCategory.controller';

const router = express.Router();

router.get('/', subCategoryController.list);
router.get('/:id', subCategoryController.getById);

export default router;
