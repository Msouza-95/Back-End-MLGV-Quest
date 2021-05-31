import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateQuestionGroupService from '@modules/exam/services/CreateQuestionGroupService';
import KeepQuestionGroupService from '@modules/exam/services/KeepQuestionGroupService';
import ShowQuestionGroupService from '@modules/exam/services/ShowQuestionGroupService';

class QuestionGroupController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, classs } = request.body;
    const { id } = request.params;

    const createQuestionGroupService = container.resolve(
      CreateQuestionGroupService,
    );

    const questionGroup = await createQuestionGroupService.execute({
      title,
      classs,
      exam_id: Number(id),
    });

    return response.status(201).json(questionGroup);
  }

  // public async index(request: Request, response: Response): Promise<Response> {
  //   const showQuestionGroupService = container.resolve(
  //     ShowQuestionGroupService,
  //   );
  //   const questionGroups = await showQuestionGroupService.execute();

  //   return response.status(200).json(questionGroups);
  // }

  public async read(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showQuestionGroupService = container.resolve(
      ShowQuestionGroupService,
    );

    const questionGroup = await showQuestionGroupService.execute(Number(id));

    return response.status(200).json(questionGroup);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const operation = 'DELETE';

    const keepQuestionGroupService = container.resolve(
      KeepQuestionGroupService,
    );

    const result = await keepQuestionGroupService.execute(Number(id), {
      operation,
    });

    return response.status(200).json(result);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { title, classs } = request.body;
    const { id } = request.params;
    const operation = 'UPDATE';

    const keepQuestionGroupService = container.resolve(
      KeepQuestionGroupService,
    );

    const result = await keepQuestionGroupService.execute(Number(id), {
      operation,
      title,
      classs,
    });

    return response.status(200).json(result);
  }
}

export default QuestionGroupController;
