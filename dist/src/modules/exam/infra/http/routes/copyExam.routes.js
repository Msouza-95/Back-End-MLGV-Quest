"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ensureAuthenticated = _interopRequireDefault(require("../../../../user/infra/http/middleware/ensureAuthenticated"));

var _CopyExamController = _interopRequireDefault(require("../controllers/CopyExamController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const copyExamRoutes = (0, _express.Router)();
const copyExamContoller = new _CopyExamController.default();
copyExamRoutes.use(_ensureAuthenticated.default);
copyExamRoutes.post('/:id', copyExamContoller.create);
var _default = copyExamRoutes;
exports.default = _default;