import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateQuestionService from '@modules/exam/services/CreateQuestionService';
import ShowQuestionService from '@modules/exam/services/ShowQuestionService';

class QuestionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      statement,
      image_url,
      image_alt,
      required,
      exam_question_group_id,
    } = request.body;

    const createQuestionService = container.resolve(CreateQuestionService);

    const question = await createQuestionService.execute({
      statement,
      image_url,
      image_alt,
      required,
      exam_question_group_id,
    });

    return response.status(201).json(question);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showQuestinService = container.resolve(ShowQuestionService);

    const questions = await showQuestinService.execute(Number(id));

    return response.status(200).json(questions);
  }
}
export default QuestionController;
