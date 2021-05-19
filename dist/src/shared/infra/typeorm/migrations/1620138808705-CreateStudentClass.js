"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStudentClass1620138808705 = void 0;
const typeorm_1 = require("typeorm");
class CreateStudentClass1620138808705 {
    async up(queryRunner) {
        queryRunner.createTable(new typeorm_1.Table({
            name: 'studentClass',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'user_id',
                    type: 'integer',
                },
                {
                    name: 'class_id',
                    type: 'integer',
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['user_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'user',
                    name: 'userStudentClass',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    columnNames: ['class_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'class',
                    name: 'studentClass',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ],
        }));
    }
    async down(queryRunner) {
        queryRunner.dropTable('studentClass');
    }
}
exports.CreateStudentClass1620138808705 = CreateStudentClass1620138808705;
