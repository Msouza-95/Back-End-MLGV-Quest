import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateClass1620137966261 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'class',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'subject_id',
            type: 'integer',
          },
          {
            name: 'period_id',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['subject_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'subject',
            name: 'subjectClass',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            columnNames: ['period_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'period',
            name: 'periodClass',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('class');
  }
}
