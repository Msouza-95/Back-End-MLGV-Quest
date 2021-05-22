"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _copyExam = _interopRequireDefault(require("../../../../modules/exam/infra/http/routes/copyExam.routes"));

var _exam = _interopRequireDefault(require("../../../../modules/exam/infra/http/routes/exam.routes"));

var _positionQuestionGroup = _interopRequireDefault(require("../../../../modules/exam/infra/http/routes/positionQuestionGroup.routes"));

var _question = _interopRequireDefault(require("../../../../modules/exam/infra/http/routes/question.routes"));

var _questionGroup = _interopRequireDefault(require("../../../../modules/exam/infra/http/routes/questionGroup.routes"));

var _authenticate = _interopRequireDefault(require("../../../../modules/user/infra/http/routes/authenticate.routes"));

var _users = _interopRequireDefault(require("../../../../modules/user/infra/http/routes/users.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use('/users', _users.default);
routes.use('/session', _authenticate.default);
routes.use('/exam', _exam.default);
routes.use('/question', _question.default);
routes.use('/questiongroup', _questionGroup.default);
routes.use('/positionquestiongroup', _positionQuestionGroup.default);
routes.use('/copyexam', _copyExam.default);
var _default = routes;
exports.default = _default;