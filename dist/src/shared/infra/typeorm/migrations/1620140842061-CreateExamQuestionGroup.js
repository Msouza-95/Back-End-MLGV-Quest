"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateExamQuestionGroup1620140842061 = void 0;
const typeorm_1 = require("typeorm");
class CreateExamQuestionGroup1620140842061 {
    async up(queryRunner) {
        queryRunner.createTable(new typeorm_1.Table({
            name: 'examQuestionGroup',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'position',
                    type: 'integer',
                    isNullable: true,
                },
                {
                    name: 'exam_id',
                    type: 'integer',
                    isNullable: true,
                },
                {
                    name: 'question_group_id',
                    type: 'integer',
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['exam_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'exam',
                    name: 'examQuestionGroup',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    columnNames: ['question_group_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'questionGroup',
                    name: 'questionGroupExam',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ],
        }));
    }
    async down(queryRunner) {
        queryRunner.dropTable('examQuestionGroup');
    }
}
exports.CreateExamQuestionGroup1620140842061 = CreateExamQuestionGroup1620140842061;
