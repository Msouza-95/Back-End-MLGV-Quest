import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import ExamQuestionGroup from './ExamQuestionGroup';

@Entity('questionGroup')
class QuestionGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('class')
  _class: boolean;

  @OneToMany(
    () => ExamQuestionGroup,
    examQuestionGroup => examQuestionGroup.questionGroup,
  )
  examQuestionGroups: ExamQuestionGroup[];
}

export default QuestionGroup;
