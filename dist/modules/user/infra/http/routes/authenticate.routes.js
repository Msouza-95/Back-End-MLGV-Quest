"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _AuthenticateUserController = _interopRequireDefault(require("../controllers/AuthenticateUserController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const authenticateRoutes = (0, _express.Router)();
const authenticateUserController = new _AuthenticateUserController.default();
authenticateRoutes.post('/', authenticateUserController.create);
var _default = authenticateRoutes;
exports.default = _default;