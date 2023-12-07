"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
var router = express_1.default.Router();
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
    res.json({ payload: "test Data" });
});
exports.default = router;
//# sourceMappingURL=api-controller.js.map