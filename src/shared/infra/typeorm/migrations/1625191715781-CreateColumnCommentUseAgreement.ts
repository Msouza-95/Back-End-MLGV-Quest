import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class CreateColumnCommentUseAgreement1625191715781
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'userAgreement',
      new TableColumn({
        name: 'comment',
        type: 'text',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('userAgreement', 'comment');
  }
}
