/* eslint-disable no-plusplus */
import { inject, injectable } from 'tsyringe';

import IExamRepository from '@modules/exam/repositories/IExamRepository';
import AppError from '@shared/errors/AppError';

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

interface IMediaGroup {
  group: string;
  score: number;
  total: number;
}

interface IMedia {
  group: string;
  media: number;
}

@injectable()
class CreateCSVService {
  private responses: IResponse[] = [];
  private mediaGroup: IMediaGroup[] = [];
  private medias: IMedia[] = [];
  constructor(
    @inject('ExamRepository')
    private examRepository: IExamRepository,
  ) {}

  public async execute(exam_id: number): Promise<IResponse[]> {
    console.log(exam_id);
    const examQuery = await this.examRepository.queryCSV(exam_id);
    if (!examQuery) {
      throw new AppError('não achou nada');
    }

    // adicionar grupo e score no array
    const promisesQuery2 = examQuery.map(async query => {
      const {
        group_title,

        score,
      } = query;

      const media = {
        group: group_title,
        score,
        total: 1,
      };

      const mediateste = this.mediaGroup.find(
        media => media.group === query.group_title,
      );

      if (mediateste) {
        const index = this.mediaGroup.findIndex(
          media => media.group === query.group_title,
        );
        const soma = this.mediaGroup[index].score;
        this.mediaGroup[index].score = soma + query.score;
        const { total } = this.mediaGroup[index];
        this.mediaGroup[index].total = total + 1;
      } else {
        this.mediaGroup.push(media);
      }
    });

    await Promise.all(promisesQuery2);

    const promisesQuery4 = this.mediaGroup.map(async media => {
      const findMedia = this.medias.find(m => m.group === media.group);

      if (!findMedia) {
        const med = media.score / media.total;
        const newmedia = {
          group: media.group,
          media: med,
        };

        this.medias.push(newmedia);
      }
    });

    console.table(this.medias);

    await Promise.all(promisesQuery4);

    // map criar estrutura de resposta
    const promisesQuery = examQuery.map(async query => {
      const {
        Disciplina,
        group_title,
        Questao,
        Usuarios,
        Matricula,
        Comentario,
        Codigo,
      } = query;

      const { length } = this.medias;
      let med;

      for (let i = 0; i < length; i++) {
        if (this.medias[i].group === group_title) {
          med = this.medias[i].media;
        }
      }
      const res = {
        groupquestion: group_title,
        class: Disciplina,
        question: Questao,
        user: Usuarios,
        matricula: Matricula,
        coments: Comentario,
        codigo: Codigo,
        media: med,
      };

      this.responses.push(res);
    });

    await Promise.all(promisesQuery);

    return this.responses;
  }
}

export default CreateCSVService;
