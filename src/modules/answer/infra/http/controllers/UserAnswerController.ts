import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserAnswerService from '@modules/answer/services/CreateUserAnswerService';

class UserAnswerController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      answer,
      agreement_id,
      score,
      question_id,
      isClass,
      class_id,
    } = request.body;
    console.log('bahia');
    const createUserAnswerService = container.resolve(CreateUserAnswerService);

    const userAnswer = await createUserAnswerService.execute(
      answer /* {
      user_agreement_id: agreement_id,
      question_id,
      score,
      isClass,
      class_id,
    } */,
    );

    return response.json(userAnswer);
  }
}

export default UserAnswerController;
