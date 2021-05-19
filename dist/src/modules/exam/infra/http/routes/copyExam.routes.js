"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ensureAuthenticated_1 = __importDefault(require("@modules/user/infra/http/middleware/ensureAuthenticated"));
const CopyExamController_1 = __importDefault(require("../controllers/CopyExamController"));
const copyExamRoutes = express_1.Router();
const copyExamContoller = new CopyExamController_1.default();
copyExamRoutes.use(ensureAuthenticated_1.default);
copyExamRoutes.post('/:id', copyExamContoller.create);
exports.default = copyExamRoutes;
