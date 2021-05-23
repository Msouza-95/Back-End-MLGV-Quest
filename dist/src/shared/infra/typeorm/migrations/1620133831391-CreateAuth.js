"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateAuth1620133831391 = void 0;

var _typeorm = require("typeorm");

class CreateAuth1620133831391 {
  async up(queryRunner) {
    queryRunner.createTable(new _typeorm.Table({
      name: 'auth',
      columns: [{
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'user_id',
        type: 'integer'
      }, {
        name: 'password',
        type: 'varchar'
      }],
      foreignKeys: [{
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        name: 'authUser',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }]
    }));
  }

  async down(queryRunner) {
    queryRunner.dropTable('auth');
  }

}

exports.CreateAuth1620133831391 = CreateAuth1620133831391;