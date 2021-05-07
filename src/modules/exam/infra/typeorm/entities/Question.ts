import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { CreateExamQuestionGroup1620140842061 } from '@shared/infra/typeorm/migrations/1620140842061-CreateExamQuestionGroup';

import ExamQuestionGroup from './ExamQuestionGroup';

@Entity('question')
class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  statement: string;

  @Column()
  image_ur: string;

  @Column()
  image_alt: string;

  @Column()
  required: boolean;

  @Column()
  exam_question_group_id: number;

  // realtion
  @ManyToOne(
    () => ExamQuestionGroup,
    examQuestionGroup => examQuestionGroup.questions,
  )
  examQuestionGroup: ExamQuestionGroup;
}

export default Question;
