"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePeriod1620136986654 = void 0;
const typeorm_1 = require("typeorm");
class CreatePeriod1620136986654 {
    async up(queryRunner) {
        queryRunner.createTable(new typeorm_1.Table({
            name: 'period',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isPrimary: true,
                },
                {
                    name: 'started_at',
                    type: 'date',
                },
                {
                    name: 'ended_at',
                    type: 'date',
                },
            ],
        }));
    }
    async down(queryRunner) {
        queryRunner.dropTable('period');
    }
}
exports.CreatePeriod1620136986654 = CreatePeriod1620136986654;
