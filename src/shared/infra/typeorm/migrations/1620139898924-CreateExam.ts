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
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: true,
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
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('exam');
  }
}
