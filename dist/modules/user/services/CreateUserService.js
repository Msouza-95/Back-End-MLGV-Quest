"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IAuthRepository = _interopRequireDefault(require("../repositories/IAuthRepository"));

var _IUserRepository = _interopRequireDefault(require("../repositories/IUserRepository"));

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateUserService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UserRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('AuthRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IUserRepository.default === "undefined" ? Object : _IUserRepository.default, typeof _IAuthRepository.default === "undefined" ? Object : _IAuthRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateUserService {
  constructor(userRepository, authRepository) {
    this.userRepository = userRepository;
    this.authRepository = authRepository;
  }

  async execute({
    email,
    password,
    enrollment,
    type
  }) {
    const findUser = await this.userRepository.findByEmail(email);

    if (findUser) {
      throw new _AppError.default('User Aready Exists');
    }

    const newUser = await this.userRepository.create({
      email,
      enrollment,
      type
    });
    const newAuth = await this.authRepository.create(newUser.id, password);

    if (newAuth) {
      return newUser;
    }

    throw new _AppError.default('user erro');
  }

}) || _class) || _class) || _class) || _class) || _class);
var _default = CreateUserService;
exports.default = _default;