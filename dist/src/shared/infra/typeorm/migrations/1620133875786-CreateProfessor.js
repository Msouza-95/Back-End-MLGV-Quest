"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateProfessor1620133875786 = void 0;

var _typeorm = require("typeorm");

class CreateProfessor1620133875786 {
  async up(queryRunner) {
    queryRunner.createTable(new _typeorm.Table({
      name: 'professor',
      columns: [{
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'user_id',
        type: 'integer'
      }],
      foreignKeys: [{
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        name: 'professorUser',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }]
    }));
  }

  async down(queryRunner) {
    queryRunner.dropTable('professor');
  }

}

exports.CreateProfessor1620133875786 = CreateProfessor1620133875786;