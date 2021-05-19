"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfessorClass1620138494520 = void 0;
const typeorm_1 = require("typeorm");
class CreateProfessorClass1620138494520 {
    async up(queryRunner) {
        queryRunner.createTable(new typeorm_1.Table({
            name: 'professorClass',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'professor_id',
                    type: 'integer',
                },
                {
                    name: 'class_id',
                    type: 'integer',
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['professor_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'professor',
                    name: 'professorClass',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    columnNames: ['class_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'class',
                    name: 'classProfessor',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ],
        }));
    }
    async down(queryRunner) {
        queryRunner.dropTable('professorClass');
    }
}
exports.CreateProfessorClass1620138494520 = CreateProfessorClass1620138494520;
