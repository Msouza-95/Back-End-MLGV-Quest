import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CopyExamService from '@modules/exam/services/CopyExamService';

class CopyExamContoller {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      title,
      description,
      started_at,
      ended_at,
      allow_anonymous,
    } = request.body;

    const { id } = request.params;

    const copyExamService = container.resolve(CopyExamService);

    const newExam = await copyExamService.execute({
      id,
      title,
      description,
      started_at,
      ended_at,
      allow_anonymous,
    });

    return response.status(200).json(newExam);
  }
}

export default CopyExamContoller;
