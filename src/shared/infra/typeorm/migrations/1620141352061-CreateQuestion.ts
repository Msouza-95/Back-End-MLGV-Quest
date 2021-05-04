import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateQuestion1620141352061 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'question',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'statement',
            type: 'text',
          },
          {
            name: 'image_url',
            type: 'varchar',
          },
          {
            name: 'image_alt',
            type: 'varchar',
          },
          {
            name: 'required',
            type: 'bool',
          },
          {
            name: 'exam_question_group_id',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['exam_question_group_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'examQuestionGroup',
            name: 'examGroupQuestion',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('question');
  }
}
