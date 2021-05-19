"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PositionQuestionGroupController_1 = __importDefault(require("@modules/exam/infra/http/controllers/PositionQuestionGroupController"));
const ensureAuthenticated_1 = __importDefault(require("@modules/user/infra/http/middleware/ensureAuthenticated"));
const positonQuestionGroupRoutes = express_1.Router();
const positonQuestionGroupController = new PositionQuestionGroupController_1.default();
positonQuestionGroupRoutes.use(ensureAuthenticated_1.default);
positonQuestionGroupRoutes.post('/', positonQuestionGroupController.create);
exports.default = positonQuestionGroupRoutes;
