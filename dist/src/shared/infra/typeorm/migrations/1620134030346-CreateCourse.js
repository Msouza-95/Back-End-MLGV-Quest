"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCourse1620134030346 = void 0;
const typeorm_1 = require("typeorm");
class CreateCourse1620134030346 {
    async up(queryRunner) {
        queryRunner.createTable(new typeorm_1.Table({
            name: 'course',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'code',
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'title',
                    type: 'varchar',
                },
            ],
        }));
    }
    async down(queryRunner) {
        queryRunner.dropTable('course');
    }
}
exports.CreateCourse1620134030346 = CreateCourse1620134030346;
