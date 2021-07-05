import { DeleteResult, getRepository, Repository, UpdateResult } from 'typeorm';

import ICreateExam from '@modules/exam/dtos/ICreateExam';
import IUpdateExam from '@modules/exam/dtos/IUpdateExam';
import IExamRepository from '@modules/exam/repositories/IExamRepository';

import Exam from '../entities/Exam';

class ExamRepository implements IExamRepository {
  private ormRepository: Repository<Exam>;

  constructor() {
    this.ormRepository = getRepository(Exam);
  }

  public async index(): Promise<Exam[]> {
    const exams = await this.ormRepository.find();

    return exams;
  }

  public async create(data: ICreateExam): Promise<Exam> {
    const createExam = this.ormRepository.create(data);

    await this.ormRepository.save(createExam);

    return createExam;
  }

  public async findById(id: number): Promise<Exam | undefined> {
    const findExam = this.ormRepository.findOne({ where: { id } });
    return findExam;
  }

  public async findByTitle(title: string): Promise<Exam | undefined> {
    const findExam = this.ormRepository.findOne({ where: { title } });
    return findExam;
  }

  public async delete(id: number): Promise<DeleteResult> {
    const deleteResult = await this.ormRepository.delete(id);
    return deleteResult;
  }

  public async update(id: number, data: IUpdateExam): Promise<UpdateResult> {
    const examUpdate = await this.ormRepository.update(id, data);

    return examUpdate;
  }

  public async queryCSV(exam_id: number): Promise<any> {
    const Query = this.ormRepository.query(
      'select agree.exam_id as exam_id, agree.id as agreement_id, agree.comment as Comentario, agree.uuid as Codigo, qg.title as group_title, qg.class as is_class, qg.id as group_id, q.id as question_id, q.statement as Questao, a.id as answer_id, a.score as score, s.title as Disciplina, u.enrollment as Matricula, u.email as Usuarios FROM userAgreement as agree INNER JOIN user as u ON u.id = agree.user_id INNER JOIN userAnswer as a ON a.user_agreement_id = agree.id INNER JOIN userAnswerClass as uclass ON a.id = uclass.user_answer_id LEFT JOIN class as g ON g.id = uclass.class_id LEFT JOIN subject as s ON s.id = g.subject_id INNER JOIN question as q ON q.id = a.question_id INNER JOIN examQuestionGroup as ex ON ex.id = q.exam_question_group_id INNER JOIN questionGroup as qg ON qg.id = ex.question_group_id WHERE agree.exam_id =? ORDER BY agree.id ASC, qg.id ASC, q.id ASC'[
        exam_id
      ],
    );

    return Query;
  }
}

export default ExamRepository;
