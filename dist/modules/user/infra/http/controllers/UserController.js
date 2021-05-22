"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CreateUserService = _interopRequireDefault(require("../../../services/CreateUserService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserController {
  async create(resquest, response) {
    const {
      email,
      password,
      enrollment,
      type
    } = resquest.body;

    const createUserService = _tsyringe.container.resolve(_CreateUserService.default);

    const UserService = await createUserService.execute({
      email,
      password,
      enrollment,
      type
    });
    return response.json({
      UserService
    });
  }

}

var _default = UserController;
exports.default = _default;