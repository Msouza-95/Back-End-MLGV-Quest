"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserAgreement1620142116894 = void 0;

var _typeorm = require("typeorm");

class CreateUserAgreement1620142116894 {
  async up(queryRunner) {
    queryRunner.createTable(new _typeorm.Table({
      name: 'userAgreement',
      columns: [{
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'uuid',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'created_at',
        type: 'date'
      }, {
        name: 'anoymous',
        type: 'bool'
      }, {
        name: 'exam_id',
        type: 'integer'
      }, {
        name: 'user_id',
        type: 'integer'
      }],
      foreignKeys: [{
        columnNames: ['exam_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'exam',
        name: 'examUserAgreement',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }, {
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        name: 'userAgreement',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }]
    }));
  }

  async down(queryRunner) {
    queryRunner.dropTable('userAgreement');
  }

}

exports.CreateUserAgreement1620142116894 = CreateUserAgreement1620142116894;