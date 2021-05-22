"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _UserController = _interopRequireDefault(require("../controllers/UserController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const usersRouter = (0, _express.Router)();
const userController = new _UserController.default();
usersRouter.get('/', (request, response) => {
  return response.json({
    message: 'Rota de users sacou'
  });
});
usersRouter.post('/', userController.create);
var _default = usersRouter;
exports.default = _default;