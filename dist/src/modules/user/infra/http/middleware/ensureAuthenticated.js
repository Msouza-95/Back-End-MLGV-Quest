"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ensureAuthenticated;

var _jsonwebtoken = require("jsonwebtoken");

var _auths = _interopRequireDefault(require("../../../../../config/auths"));

var _AppError = _interopRequireDefault(require("../../../../../shared/errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new _AppError.default('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const {
      sub: user_id
    } = (0, _jsonwebtoken.verify)(token, _auths.default.jwt.secret);
    request.user = {
      id: user_id
    };

    if (!request.user) {
      throw new _AppError.default('user does not exists');
    }

    next();
  } catch {
    throw new _AppError.default('Invalid token', 401);
  }
}