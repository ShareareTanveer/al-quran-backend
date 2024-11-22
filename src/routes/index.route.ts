import * as express from 'express';

import categoryRouter from './category/category.route';
import subCategoryRouter from './category/subCategory.route';
import duaRouter from './dua/dua.route';

const router = express.Router();

router.use('/category', categoryRouter);
router.use('/sub-category', subCategoryRouter);
router.use('/dua', duaRouter);



export default router;
