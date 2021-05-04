import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserAnswer1620142707670 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'userAnswer',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'score',
            type: 'integer',
          },
          {
            name: 'question_id',
            type: 'integer',
          },
          {
            name: 'user_agreement_id',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['question_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'question',
            name: 'questionUserAnswer',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            columnNames: ['user_agreement_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'userAgreement',
            name: 'userAgreementAnswer',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('userAnswer');
  }
}
