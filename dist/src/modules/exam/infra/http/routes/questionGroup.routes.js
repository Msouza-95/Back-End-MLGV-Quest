"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ensureAuthenticated_1 = __importDefault(require("@modules/user/infra/http/middleware/ensureAuthenticated"));
const QuestionGroupController_1 = __importDefault(require("../controllers/QuestionGroupController"));
const questionGroupRoutes = express_1.Router();
const questionGroupController = new QuestionGroupController_1.default();
questionGroupRoutes.use(ensureAuthenticated_1.default);
questionGroupRoutes.post('/', questionGroupController.create);
questionGroupRoutes.get('/', questionGroupController.index);
questionGroupRoutes.get('/:id', questionGroupController.read);
questionGroupRoutes.delete('/:id', questionGroupController.delete);
questionGroupRoutes.put('/:id', questionGroupController.update);
exports.default = questionGroupRoutes;
