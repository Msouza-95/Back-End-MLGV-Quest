import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateQuestionService from '@modules/exam/services/CreateQuestionService';

class QuestionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      statement,
      image_ur,
      image_alt,
      required,
      exam_question_group_id,
    } = request.body;

    const createQuestionService = container.resolve(CreateQuestionService);

    const question = await createQuestionService.execute({
      statement,
      image_ur,
      image_alt,
      required,
      exam_question_group_id,
    });

    return response.status(201).json(question);
  }
}

export default QuestionController;
