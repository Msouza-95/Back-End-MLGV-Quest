"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateQuestionGroup1620139577041 = void 0;

var _typeorm = require("typeorm");

class CreateQuestionGroup1620139577041 {
  async up(queryRunner) {
    queryRunner.createTable(new _typeorm.Table({
      name: 'questionGroup',
      columns: [{
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'title',
        type: 'varchar'
      }, {
        name: 'class',
        type: 'bool',
        isNullable: true
      }]
    }));
  }

  async down(queryRunner) {
    queryRunner.dropTable('questionGroup');
  }

}

exports.CreateQuestionGroup1620139577041 = CreateQuestionGroup1620139577041;