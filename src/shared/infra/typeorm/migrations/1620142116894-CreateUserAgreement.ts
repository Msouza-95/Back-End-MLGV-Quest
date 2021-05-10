import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserAgreement1620142116894 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'userAgreement',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'uuid',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
          },
          {
            name: 'anoymous',
            type: 'bool',
          },
          {
            name: 'exam_id',
            type: 'integer',
          },
          {
            name: 'user_id',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['exam_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'exam',
            name: 'examUserAgreement',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            name: 'userAgreement',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('userAgreement');
  }
}
