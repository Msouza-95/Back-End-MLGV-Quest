import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterColumnUserAnswer1625192674243 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('userAnswer', 'score');

    await queryRunner.addColumn(
      'userAnswer',
      new TableColumn({
        name: 'score',
        type: 'integer',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('userAnswer', 'score');
  }
}
