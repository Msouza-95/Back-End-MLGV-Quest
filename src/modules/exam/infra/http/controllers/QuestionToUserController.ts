import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ShowQuestionToUserService from '@modules/exam/services/ShowQuestionToUserService';

class QuestionToUserController {
  public async read(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    console.log(id);

    const user_id = Number(request.user.id);

    const exam_id = Number(id);
    const showQuestionToUserService = container.resolve(
      ShowQuestionToUserService,
    );

    const result = await showQuestionToUserService.execute(exam_id);

    return response.json(result);
  }
}

export default QuestionToUserController;
