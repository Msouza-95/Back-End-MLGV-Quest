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
      'select g.title as Grupoquestão, sub.title as Diciplina , q.statement as Questão, u.email as Usuário , u.enrollment as Matricula, a.comment as Comentário , a.uuid as Código from questionGroup as g inner join examQuestionGroup as ex on g.id = ex.question_group_id inner join question as q on ex.id = q.exam_question_group_id inner join exam as e on ex.exam_id = e.id inner join userAgreement as a on a.exam_id = e.id inner join user as u on a.user_id = u.id inner join userAnswer as ua  on a.id = ua.user_agreement_id inner join userAnswerClass as uc on ua.id = uc.user_answer_id inner join class as cl on uc.class_id = cl.id inner join subject as sub on cl.subject_id = sub.id where e.id =1',
      [exam_id],
    );

    return Query;
  }
}

export default ExamRepository;
