"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
//Importing project dependancies that we installed earlier
const dotenv = tslib_1.__importStar(require("dotenv"));
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
const api_controller_1 = tslib_1.__importDefault(require("./controller/api-controller"));
const health_controller_1 = tslib_1.__importDefault(require("./controller/health-controller"));
//App Varaibles 
dotenv.config();
//intializing the express app 
const app = (0, express_1.default)();
//using the dependancies
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', api_controller_1.default);
app.use('/actuator', health_controller_1.default);
//exporting app
module.exports = app;
//# sourceMappingURL=index.js.map