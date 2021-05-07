import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Question from './Question';
import QuestionGroup from './QuestionGroup';

@Entity('examQuestionGroup')
class ExamQuestionGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  position: number;

  @Column()
  exam_id: number;

  @Column()
  question_group_id: number;

  //
  @OneToMany(() => Question, question => question.examQuestionGroup)
  questions: Question[];

  @ManyToOne(
    () => QuestionGroup,
    questionGroup => questionGroup.examQuestionGroups,
  )
  questionGroup: QuestionGroup;
}

export default ExamQuestionGroup;
