"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _PositionQuestionGroupController = _interopRequireDefault(require("../controllers/PositionQuestionGroupController"));

var _ensureAuthenticated = _interopRequireDefault(require("../../../../user/infra/http/middleware/ensureAuthenticated"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const positonQuestionGroupRoutes = (0, _express.Router)();
const positonQuestionGroupController = new _PositionQuestionGroupController.default();
positonQuestionGroupRoutes.use(_ensureAuthenticated.default);
positonQuestionGroupRoutes.post('/', positonQuestionGroupController.create);
var _default = positonQuestionGroupRoutes;
exports.default = _default;