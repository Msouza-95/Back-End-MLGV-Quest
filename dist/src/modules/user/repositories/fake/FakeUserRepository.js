"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class FakeUserRepository {
  constructor() {
    this.users = [];
  }

  create(data) {
    throw new Error('Method not implemented.');
  }

  async findByEmail(email) {
    const findUser = this.users.find(user => user.email === email);
    return findUser;
  }

  async findById(user_id) {
    const findUser = this.users.find(user => user.id === user_id);
    return findUser;
  }

}

var _default = FakeUserRepository;
exports.default = _default;