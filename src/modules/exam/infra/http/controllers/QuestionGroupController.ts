import CreateQuestionGroupService from '@modules/exam/services/CreateQuestionGroupService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class QuestionGroupController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, _class } = request.body;

    const createQuestionGroupService = container.resolve(
      CreateQuestionGroupService,
    );

    const questionGroup = createQuestionGroupService.execute({ title, _class });

    return response.status(201).json(questionGroup);
  }
}

export default QuestionGroupController;
