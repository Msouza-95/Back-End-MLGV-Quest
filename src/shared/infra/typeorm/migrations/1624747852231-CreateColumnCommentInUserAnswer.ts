import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class CreateColumnCommentInUserAnswer1624747852231
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'userAnswer',
      new TableColumn({
        name: 'comment',
        type: 'text',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('userAnswer', 'comment');
  }
}
