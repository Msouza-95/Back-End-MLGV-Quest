import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateQuestionGroupService from '@modules/exam/services/CreateQuestionGroupService';

class QuestionGroupController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, classs } = request.body;

    const createQuestionGroupService = container.resolve(
      CreateQuestionGroupService,
    );

    const questionGroup = await createQuestionGroupService.execute({
      title,
      classs,
    });

    return response.status(201).json(questionGroup);
  }
}

export default QuestionGroupController;
