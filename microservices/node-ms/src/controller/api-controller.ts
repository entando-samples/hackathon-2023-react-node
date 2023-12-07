import express from 'express';
var router = express.Router();

/**
 * @swagger
 * /api/example:
 *   get:
 *     description: Returns a custom metric
 *     responses:
 *       200:
 *         description: the metric
 */
router.get('/example', (req, res) => {
    res.json({payload:"test Data"});
});

export default router;