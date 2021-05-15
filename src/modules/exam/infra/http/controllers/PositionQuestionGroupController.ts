import { Request, Response } from 'express';
import { container } from 'tsyringe';

import PositionQuestionGroupService from '@modules/exam/services/PositionQuestionGroupService';

class PositonQuestionGroupController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { exam_id, question_group_id, position } = request.body;

    const positionQuestionGroupService = container.resolve(
      PositionQuestionGroupService,
    );

    const newposition = await positionQuestionGroupService.execute({
      exam_id,
      question_group_id,
      position,
    });

    return response.status(200).json(newposition);
  }
}

export default PositonQuestionGroupController;
