"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClass1620137966261 = void 0;
const typeorm_1 = require("typeorm");
class CreateClass1620137966261 {
    async up(queryRunner) {
        queryRunner.createTable(new typeorm_1.Table({
            name: 'class',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'subject_id',
                    type: 'integer',
                },
                {
                    name: 'period_id',
                    type: 'integer',
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['subject_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'subject',
                    name: 'subjectClass',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    columnNames: ['period_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'period',
                    name: 'periodClass',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ],
        }));
    }
    async down(queryRunner) {
        queryRunner.dropTable('class');
    }
}
exports.CreateClass1620137966261 = CreateClass1620137966261;
