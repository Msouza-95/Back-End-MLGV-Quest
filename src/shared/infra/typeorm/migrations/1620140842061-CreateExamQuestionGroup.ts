import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateExamQuestionGroup1620140842061
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'examQuestionGroup',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'position',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'exam_id',
            type: 'integer',
          },
          {
            name: 'question_gropu_id',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['exam_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'exam',
            name: 'examQuestionGroup',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            columnNames: ['question_gropu_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'questionGroup',
            name: 'questionGroupExam',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('examQuestionGroup');
  }
}
