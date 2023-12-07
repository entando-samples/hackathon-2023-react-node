"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
let router = express_1.default.Router();
const responseBody = { "status": "UP" };
router.get('/health', function (req, res) {
    res.status(200).json(responseBody);
});
exports.default = router;
//# sourceMappingURL=health-controller.js.map