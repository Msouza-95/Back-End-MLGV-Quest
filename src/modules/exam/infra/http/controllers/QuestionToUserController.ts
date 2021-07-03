import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ShowQuestionToUserService from '@modules/exam/services/ShowQuestionToUserService';

class QuestionToUserController {
  public async read(request: Request, response: Response): Promise<Response> {
    const { exam_id } = request.params;
    const { id } = request.user;
    console.log(`${exam_id}:${id}`);
    const showQuestionToUserService = container.resolve(
      ShowQuestionToUserService,
    );

    const result = await showQuestionToUserService.execute({
      exam_id: Number(exam_id),
      user_id: Number(id),
    });

    return response.json(result);
  }
}

export default QuestionToUserController;
