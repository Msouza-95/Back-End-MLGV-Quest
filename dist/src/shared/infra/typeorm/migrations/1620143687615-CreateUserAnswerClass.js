"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserAnswerClass1620143687615 = void 0;
const typeorm_1 = require("typeorm");
class CreateUserAnswerClass1620143687615 {
    async up(queryRunner) {
        queryRunner.createTable(new typeorm_1.Table({
            name: 'userAnswerClass',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'score',
                    type: 'integer',
                    isNullable: true,
                },
                {
                    name: 'class_id',
                    type: 'integer',
                },
                {
                    name: 'user_answer_id',
                    type: 'integer',
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['class_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'class',
                    name: 'classUserAnswer',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    columnNames: ['user_answer_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'userAnswer',
                    name: 'usertAnswerclass',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ],
        }));
    }
    async down(queryRunner) {
        queryRunner.dropTable('userAnswerClass');
    }
}
exports.CreateUserAnswerClass1620143687615 = CreateUserAnswerClass1620143687615;
