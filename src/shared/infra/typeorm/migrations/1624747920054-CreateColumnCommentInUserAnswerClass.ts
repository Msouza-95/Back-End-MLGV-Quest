import { text } from 'express';
import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class CreateColumnCommentInUserAnswerClass1624747920054
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'userAnswerClass',
      new TableColumn({
        name: 'comment',
        type: 'text',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('userAnswerClass', 'comment');
  }
}
