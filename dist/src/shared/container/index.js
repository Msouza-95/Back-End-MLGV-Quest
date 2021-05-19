"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const ExamQuestionGroupRepository_1 = __importDefault(require("@modules/exam/infra/typeorm/repositories/ExamQuestionGroupRepository"));
const ExamRepository_1 = __importDefault(require("@modules/exam/infra/typeorm/repositories/ExamRepository"));
const QuestionGroupRepository_1 = __importDefault(require("@modules/exam/infra/typeorm/repositories/QuestionGroupRepository"));
const QuestionRepository_1 = __importDefault(require("@modules/exam/infra/typeorm/repositories/QuestionRepository"));
const AuthRepository_1 = __importDefault(require("@modules/user/infra/typeorm/repositories/AuthRepository"));
const UserRepository_1 = __importDefault(require("@modules/user/infra/typeorm/repositories/UserRepository"));
tsyringe_1.container.registerSingleton('AuthRepository', AuthRepository_1.default);
tsyringe_1.container.registerSingleton('UserRepository', UserRepository_1.default);
tsyringe_1.container.registerSingleton('ExamRepository', ExamRepository_1.default);
tsyringe_1.container.registerSingleton('QuestionRepository', QuestionRepository_1.default);
tsyringe_1.container.registerSingleton('QuestionGroupRepository', QuestionGroupRepository_1.default);
tsyringe_1.container.registerSingleton('ExamQuestionGroupRepository', ExamQuestionGroupRepository_1.default);
