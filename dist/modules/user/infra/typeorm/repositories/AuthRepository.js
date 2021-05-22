"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Auth = _interopRequireDefault(require("../entities/Auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Auth.default);
  }

  async create(user_id, password) {
    const newAthu = this.ormRepository.create({
      user_id,
      password
    });
    await this.ormRepository.save(newAthu);
    return newAthu;
  }

  async findByUserID(user_id) {
    const findUser = await this.ormRepository.findOne({
      where: {
        user_id
      }
    });
    return findUser;
  }

}

exports.default = AuthRepository;