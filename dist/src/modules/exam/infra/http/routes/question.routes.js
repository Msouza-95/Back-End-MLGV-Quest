"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ensureAuthenticated_1 = __importDefault(require("@modules/user/infra/http/middleware/ensureAuthenticated"));
const QuestionController_1 = __importDefault(require("../controllers/QuestionController"));
const questionRoutes = express_1.Router();
const questionController = new QuestionController_1.default();
questionRoutes.use(ensureAuthenticated_1.default);
questionRoutes.post('/', questionController.create);
questionRoutes.get('/:exam_id/:group_id', questionController.index); // passa um id do examQuestionGroup todas as question
questionRoutes.delete('/:id', questionController.delete);
questionRoutes.put('/:id', questionController.update);
exports.default = questionRoutes;
