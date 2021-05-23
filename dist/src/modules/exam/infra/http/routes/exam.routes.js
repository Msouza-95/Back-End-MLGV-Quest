"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ensureAuthenticated = _interopRequireDefault(require("../../../../user/infra/http/middleware/ensureAuthenticated"));

var _ExamController = _interopRequireDefault(require("../controllers/ExamController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const examRoutes = (0, _express.Router)();
const examController = new _ExamController.default();
examRoutes.use(_ensureAuthenticated.default);
examRoutes.post('/', examController.create);
examRoutes.get('/', examController.index);
examRoutes.delete('/:id', examController.delete);
examRoutes.get('/:id', examController.read);
examRoutes.put('/:id', examController.update);
var _default = examRoutes;
exports.default = _default;