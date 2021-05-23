"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateSubject1620134071068 = void 0;

var _typeorm = require("typeorm");

class CreateSubject1620134071068 {
  async up(queryRunner) {
    queryRunner.createTable(new _typeorm.Table({
      name: 'subject',
      columns: [{
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'code',
        type: 'varchar',
        isUnique: true
      }, {
        name: 'title',
        type: 'varchar'
      }, {
        name: 'course_id',
        type: 'integer'
      }],
      foreignKeys: [{
        columnNames: ['course_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'course',
        name: 'subjectCourse',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }]
    }));
  }

  async down(queryRunner) {
    queryRunner.dropTable('subject');
  }

}

exports.CreateSubject1620134071068 = CreateSubject1620134071068;