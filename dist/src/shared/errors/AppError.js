"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class AppError {
  constructor(message, statusCode = 400) {
    this.statusCode = void 0;
    this.message = void 0;
    this.message = message;
    this.statusCode = statusCode;
  }

}

exports.default = AppError;