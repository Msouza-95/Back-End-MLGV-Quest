"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ensureAuthenticated_1 = __importDefault(require("@modules/user/infra/http/middleware/ensureAuthenticated"));
const ExamController_1 = __importDefault(require("../controllers/ExamController"));
const examRoutes = express_1.Router();
const examController = new ExamController_1.default();
examRoutes.use(ensureAuthenticated_1.default);
examRoutes.post('/', examController.create);
examRoutes.get('/', examController.index);
examRoutes.delete('/:id', examController.delete);
examRoutes.get('/:id', examController.read);
examRoutes.put('/:id', examController.update);
exports.default = examRoutes;
