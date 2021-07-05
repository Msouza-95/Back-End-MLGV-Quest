import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserAnswerService from '@modules/answer/services/CreateUserAnswerService';
import ShowAnswerService from '@modules/answer/services/ShowAnswerService';

class UserAnswerController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      answer,
      comment,
      agreement_id,
      score,
      question_id,
      isClass,
      class_id,
    } = request.body;
    console.log('bahia');
    const createUserAnswerService = container.resolve(CreateUserAnswerService);

    const userAnswer = await createUserAnswerService.execute({
      answer,
      comment,
    });
    /* {
      user_agreement_id: agreement_id,
      question_id,
      score,
      isClass,
      class_id,
    } */

    return response.json(userAnswer);
  }

  public async read(request: Request, response: Response): Promise<Response> {
    const { param, exam_id, user_id } = request.body;

    const showAnswerService = container.resolve(ShowAnswerService);

    const userAnswer = await showAnswerService.execute({
      param,
      exam_id,
      user_id,
    });
    /* {
      user_agreement_id: agreement_id,
      question_id,
      score,
      isClass,
      class_id,
    } */

    return response.json(userAnswer);
  }
}

export default UserAnswerController;
