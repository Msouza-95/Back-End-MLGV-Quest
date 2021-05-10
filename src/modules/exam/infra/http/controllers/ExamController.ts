import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateExamService from '@modules/exam/services/CreateExamService';

class ExamController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      title,
      description,
      started_at,
      ended_at,
      allow_anonymous,
      period_id,
    } = request.body;

    const createExamService = container.resolve(CreateExamService);

    const newExam = await createExamService.execute({
      title,
      description,
      started_at,
      ended_at,
      allow_anonymous,
      period_id,
    });

    return response.status(201).json(newExam);
  }
}

export default ExamController;
