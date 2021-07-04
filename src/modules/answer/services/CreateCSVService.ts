import { inject, injectable } from 'tsyringe';

import IExamRepository from '@modules/exam/repositories/IExamRepository';

interface IResponse {
  groupquestion: string;
  class: string;
  question: string;
  user: string;
  matricula: string;
  media: number;
  coments: string;
  codigo: number;
}

@injectable()
class CreateCSVService {
  constructor(
    @inject('ExamRepository')
    private examRepository: IExamRepository,
  ) {}

  public async execute(exam_id: number): Promise<IResponse[]> {
    const response: IResponse[] = [];
    const a = {
      groupquestion: 'GROUP 1',
      class: 'CLASS 1',
      question: 'question 1',
      user: 'users',
      matricula: 'string',
      media: 1,
      coments: 'coment',
      codigo: 2,
    };

    const c = {
      groupquestion: ' GROUP 3 ',
      class: 'CLASS 3 ',
      question: 'question 3',
      user: 'users 3',
      matricula: 'string 3',
      media: 1,
      coments: 'coment',
      codigo: 2,
    };

    const b = {
      groupquestion: 'GROUP 2',
      class: 'CLASS 2',
      question: 'question 2',
      user: 'users 2',
      matricula: 'string 2',
      media: 1,
      coments: 'coment 2',
      codigo: 2,
    };

    response.push(a);
    response.push(b);
    response.push(c);

    return response;
  }
}

export default CreateCSVService;
