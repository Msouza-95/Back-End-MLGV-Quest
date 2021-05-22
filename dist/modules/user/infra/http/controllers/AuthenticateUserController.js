"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AuthenticateUserService = _interopRequireDefault(require("../../../services/AuthenticateUserService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthenticateUserController {
  async create(resquest, response) {
    const {
      password,
      email
    } = resquest.body;

    const authenticateUserService = _tsyringe.container.resolve(_AuthenticateUserService.default);

    const authenticateToken = await authenticateUserService.execute({
      password,
      email
    });
    return response.json({
      authenticateToken
    });
  }

}

var _default = AuthenticateUserController;
exports.default = _default;