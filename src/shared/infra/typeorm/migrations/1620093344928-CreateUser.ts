import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUser1620093344928 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
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
            type: 'enum',
            enum: ['manager', 'participant'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('user');
  }
}
