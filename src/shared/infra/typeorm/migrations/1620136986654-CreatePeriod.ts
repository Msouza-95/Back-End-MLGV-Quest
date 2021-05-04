import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePeriod1620136986654 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'period',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'started_at',
            type: 'timestamp',
          },
          {
            name: 'ended_at',
            type: 'timestamp',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('period');
  }
}
