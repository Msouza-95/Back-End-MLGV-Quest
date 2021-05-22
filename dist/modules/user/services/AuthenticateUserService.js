"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = require("jsonwebtoken");

var _tsyringe = require("tsyringe");

var _auths = _interopRequireDefault(require("../../../config/auths"));

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IAuthRepository = _interopRequireDefault(require("../repositories/IAuthRepository"));

var _IUserRepository = _interopRequireDefault(require("../repositories/IUserRepository"));

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let AuthenticateUserService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UserRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('AuthRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IUserRepository.default === "undefined" ? Object : _IUserRepository.default, typeof _IAuthRepository.default === "undefined" ? Object : _IAuthRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class AuthenticateUserService {
  constructor(userRepository, authRepository) {
    this.userRepository = userRepository;
    this.authRepository = authRepository;
  }

  async execute({
    email,
    password
  }) {
    // usuario existe
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new _AppError.default('Email or password incorrect');
    } // bucas senha a tabela auth


    const auth = await this.authRepository.findByUserID(user.id);

    if (!auth) {
      throw new _AppError.default('Email or password incorrect');
    } // comparar senha


    if (password !== auth.password) {
      throw new _AppError.default('Email or password incorrect');
    } // const passwordMatch = await compare(password, auth.password);
    // if (!passwordMatch) {
    //   throw new AppError('Email or password incorrect');
    // }
    // senha está correnta gerar jsonwebtoken


    const {
      secret,
      expiresIn
    } = _auths.default.jwt;
    const token = (0, _jsonwebtoken.sign)({}, secret, {
      subject: String(user.id),
      expiresIn
    });
    return {
      user,
      token
    };
  }

}) || _class) || _class) || _class) || _class) || _class);
var _default = AuthenticateUserService;
exports.default = _default;