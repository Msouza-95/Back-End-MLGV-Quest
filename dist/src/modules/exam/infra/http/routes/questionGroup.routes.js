"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ensureAuthenticated = _interopRequireDefault(require("../../../../user/infra/http/middleware/ensureAuthenticated"));

var _QuestionGroupController = _interopRequireDefault(require("../controllers/QuestionGroupController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const questionGroupRoutes = (0, _express.Router)();
const questionGroupController = new _QuestionGroupController.default();
questionGroupRoutes.use(_ensureAuthenticated.default);
questionGroupRoutes.post('/', questionGroupController.create);
questionGroupRoutes.get('/', questionGroupController.index);
questionGroupRoutes.get('/:id', questionGroupController.read);
questionGroupRoutes.delete('/:id', questionGroupController.delete);
questionGroupRoutes.put('/:id', questionGroupController.update);
var _default = questionGroupRoutes;
exports.default = _default;