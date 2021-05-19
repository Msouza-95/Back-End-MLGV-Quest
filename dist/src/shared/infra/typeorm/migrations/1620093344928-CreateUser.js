"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser1620093344928 = void 0;
const typeorm_1 = require("typeorm");
class CreateUser1620093344928 {
    async up(queryRunner) {
        queryRunner.createTable(new typeorm_1.Table({
            name: 'user',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'email',
                    type: 'varchar',
                },
                {
                    name: 'enrollment',
                    type: 'varchar',
                },
                {
                    name: 'type',
                    type: 'varchar',
                },
            ],
        }));
    }
    async down(queryRunner) {
        queryRunner.dropTable('user');
    }
}
exports.CreateUser1620093344928 = CreateUser1620093344928;
