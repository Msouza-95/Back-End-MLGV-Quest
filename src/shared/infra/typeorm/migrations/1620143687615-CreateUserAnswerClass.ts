import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserAnswerClass1620143687615 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'userAnswerClass',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'score',
            type: 'integer',
          },
          {
            name: 'class_id',
            type: 'integer',
          },
          {
            name: 'user_answer_id',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['class_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'class',
            name: 'classUserAnswer',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            columnNames: ['user_answer_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'userAnswer',
            name: 'usertAnswerclass',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('userAnswerClass');
  }
}
