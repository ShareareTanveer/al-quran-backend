import express from 'express';
import categoryController from '../../controllers/dua/dua.controller';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Dua
 *     description: Endpoints related to Dua
 */

/**
 * @swagger
 * /dua:
 *   get:
 *     tags:
 *       - Dua
 *     summary: Get list of Dua
 *     parameters:
 *       - in: query
 *         name: keyword
 *         schema:
 *           type: string
 *         description: Search keyword to filter products by title, slug, or dua name or tag name.
 *       - in: query
 *         name: pagination
 *         schema:
 *           type: string
 *         description: set pagination to true if you want to use pagination.
 *       - in: query
 *         name: dua
 *         schema:
 *           type: string
 *         description: Filter data by dua name.
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum:
 *             - name
 *         description: Field to sort data by. 
 *         examples:
 *           name:
 *             summary: Sort by name
 *             value: name
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum:
 *             - ASC
 *             - DESC
 *         description: Sort order. 
 *         examples:
 *           ASC:
 *             summary: Sort in ascending order
 *             value: ASC
 *           DESC:
 *             summary: Sort in descending order
 *             value: DESC
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *         description: Number of products to return.
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Page number for pagination.
 *     responses:
 *       200:
 *         description: Dua list retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               data:
 *                 id: 1
 *                 name: "Dua"
 *       400:
 *         description: Error Response
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               error:
 *                 message: "Error message"
 */
router.get('/', categoryController.list);

export default router;
