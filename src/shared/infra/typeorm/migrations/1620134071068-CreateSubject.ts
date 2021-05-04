import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSubject1620134071068 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'subject',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'code',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'course_id',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['course_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'course',
            name: 'subjectCourse',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('subject');
  }
}
