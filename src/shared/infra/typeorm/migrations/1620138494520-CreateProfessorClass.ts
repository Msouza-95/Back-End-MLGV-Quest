import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProfessorClass1620138494520 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'professorClass',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'professor_id',
            type: 'integer',
          },
          {
            name: 'class_id',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['professor_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'professor',
            name: 'professorClass',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            columnNames: ['class_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'class',
            name: 'classProfessor',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('professorClass');
  }
}
