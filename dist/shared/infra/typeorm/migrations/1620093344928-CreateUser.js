"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUser1620093344928 = void 0;

var _typeorm = require("typeorm");

class CreateUser1620093344928 {
  async up(queryRunner) {
    queryRunner.createTable(new _typeorm.Table({
      name: 'user',
      columns: [{
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'email',
        type: 'varchar'
      }, {
        name: 'enrollment',
        type: 'varchar'
      }, {
        name: 'type',
        type: 'varchar'
      }]
    }));
  }

  async down(queryRunner) {
    queryRunner.dropTable('user');
  }

}

exports.CreateUser1620093344928 = CreateUser1620093344928;