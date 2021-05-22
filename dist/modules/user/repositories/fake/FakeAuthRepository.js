"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class FakeAuthRepository {
  constructor() {
    this.auths = [];
  }

  async findByUserID(user_id) {
    const findAuth = this.auths.find(auth => auth.user_id === user_id);
    return findAuth;
  }

  async create(user_id, password) {
    throw new Error('Method not implemented.');
  }

}

var _default = FakeAuthRepository;
exports.default = _default;