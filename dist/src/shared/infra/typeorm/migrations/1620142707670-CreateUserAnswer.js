"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserAnswer1620142707670 = void 0;
const typeorm_1 = require("typeorm");
class CreateUserAnswer1620142707670 {
    async up(queryRunner) {
        queryRunner.createTable(new typeorm_1.Table({
            name: 'userAnswer',
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
                },
                {
                    name: 'question_id',
                    type: 'integer',
                },
                {
                    name: 'user_agreement_id',
                    type: 'integer',
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['question_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'question',
                    name: 'questionUserAnswer',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    columnNames: ['user_agreement_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'userAgreement',
                    name: 'userAgreementAnswer',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ],
        }));
    }
    async down(queryRunner) {
        queryRunner.dropTable('userAnswer');
    }
}
exports.CreateUserAnswer1620142707670 = CreateUserAnswer1620142707670;
