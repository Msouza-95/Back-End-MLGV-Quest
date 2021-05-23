"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ensureAuthenticated = _interopRequireDefault(require("../../../../user/infra/http/middleware/ensureAuthenticated"));

var _QuestionController = _interopRequireDefault(require("../controllers/QuestionController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const questionRoutes = (0, _express.Router)();
const questionController = new _QuestionController.default();
questionRoutes.use(_ensureAuthenticated.default);
questionRoutes.post('/', questionController.create);
questionRoutes.get('/:exam_id/:group_id', questionController.index); // passa um id do examQuestionGroup todas as question

questionRoutes.delete('/:id', questionController.delete);
questionRoutes.put('/:id', questionController.update);
var _default = questionRoutes;
exports.default = _default;