import { inject, injectable } from 'tsyringe';

import IExamRepository from '@modules/exam/repositories/IExamRepository';

interface IResponse {
  groupquestion: string;
  class: string;
  question: string;
  user: string;
  matricula: string;
  media?: number;
  coments: string;
  codigo: number;
}

@injectable()
class CreateCSVService {
  private responses: IResponse[] = [];
  constructor(
    @inject('ExamRepository')
    private examRepository: IExamRepository,
  ) {}

  public async execute(exam_id: number): Promise<IResponse[]> {
    console.log(exam_id);
    const examQuery = await this.examRepository.queryCSV(exam_id);

    const promisesQuery = examQuery.map(async query => {
      const {
        Diciplina,
        Grupoquestão,
        Questão,
        Usuário,
        Matricula,
        Comentário,
        Código,
      } = query;

      const res = {
        groupquestion: Grupoquestão,
        class: Diciplina,
        question: Questão,
        user: Usuário,
        matricula: Matricula,
        coments: Comentário,
        codigo: Código,
      };

      this.responses.push(res);
    });

    await Promise.all(promisesQuery);

    return this.responses;
  }
}

export default CreateCSVService;
