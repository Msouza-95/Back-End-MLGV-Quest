"use strict";

var _tsyringe = require("tsyringe");

var _ExamQuestionGroupRepository = _interopRequireDefault(require("../../modules/exam/infra/typeorm/repositories/ExamQuestionGroupRepository"));

var _ExamRepository = _interopRequireDefault(require("../../modules/exam/infra/typeorm/repositories/ExamRepository"));

var _QuestionGroupRepository = _interopRequireDefault(require("../../modules/exam/infra/typeorm/repositories/QuestionGroupRepository"));

var _QuestionRepository = _interopRequireDefault(require("../../modules/exam/infra/typeorm/repositories/QuestionRepository"));

var _AuthRepository = _interopRequireDefault(require("../../modules/user/infra/typeorm/repositories/AuthRepository"));

var _UserRepository = _interopRequireDefault(require("../../modules/user/infra/typeorm/repositories/UserRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tsyringe.container.registerSingleton('AuthRepository', _AuthRepository.default);

_tsyringe.container.registerSingleton('UserRepository', _UserRepository.default);

_tsyringe.container.registerSingleton('ExamRepository', _ExamRepository.default);

_tsyringe.container.registerSingleton('QuestionRepository', _QuestionRepository.default);

_tsyringe.container.registerSingleton('QuestionGroupRepository', _QuestionGroupRepository.default);

_tsyringe.container.registerSingleton('ExamQuestionGroupRepository', _ExamQuestionGroupRepository.default);