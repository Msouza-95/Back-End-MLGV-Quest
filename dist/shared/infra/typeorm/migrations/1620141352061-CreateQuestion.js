"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateQuestion1620141352061 = void 0;

var _typeorm = require("typeorm");

class CreateQuestion1620141352061 {
  async up(queryRunner) {
    queryRunner.createTable(new _typeorm.Table({
      name: 'question',
      columns: [{
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'statement',
        type: 'text'
      }, {
        name: 'image_url',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'image_alt',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'required',
        type: 'bool',
        isNullable: true
      }, {
        name: 'exam_question_group_id',
        type: 'integer'
      }],
      foreignKeys: [{
        columnNames: ['exam_question_group_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'examQuestionGroup',
        name: 'examGroupQuestion',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }]
    }));
  }

  async down(queryRunner) {
    queryRunner.dropTable('question');
  }

}

exports.CreateQuestion1620141352061 = CreateQuestion1620141352061;