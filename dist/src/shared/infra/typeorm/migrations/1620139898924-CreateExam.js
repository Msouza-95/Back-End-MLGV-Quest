"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateExam1620139898924 = void 0;
const typeorm_1 = require("typeorm");
class CreateExam1620139898924 {
    async up(queryRunner) {
        queryRunner.createTable(new typeorm_1.Table({
            name: 'exam',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'title',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'description',
                    type: 'text',
                },
                {
                    name: 'started_at',
                    type: 'date',
                },
                {
                    name: 'ended_at',
                    type: 'date',
                },
                {
                    name: 'allow_anonymous',
                    type: 'bool',
                },
                {
                    name: 'status',
                    type: 'enum',
                    enum: ['active', 'inactive'],
                },
                {
                    name: 'url',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'period_id',
                    type: 'integer',
                    isNullable: true,
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['period_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'period',
                    name: 'examPeriod',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ],
        }));
    }
    async down(queryRunner) {
        queryRunner.dropTable('exam');
    }
}
exports.CreateExam1620139898924 = CreateExam1620139898924;
