import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateExam1620139898924 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'exam',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'description', // objetivo
            type: 'text',
          },
          {
            name: 'started_at',
            type: 'timestamp',
          },
          {
            name: 'ended_at',
            type: 'timestamp',
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
          },
          {
            name: 'period_id',
            type: 'integer',
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
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('exam');
  }
}
