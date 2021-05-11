import { request, Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateExamService from '@modules/exam/services/CreateExamService';
import DeleteExamService from '@modules/exam/services/DeleteExamService';
import ShowExamService from '@modules/exam/services/ShowExamService';

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

  public async index(request: Request, response: Response): Promise<Response> {
    const showExamService = container.resolve(ShowExamService);

    const exams = await showExamService.execute();

    return response.status(201).json(exams);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteExamService = container.resolve(DeleteExamService);

    const result = await deleteExamService.execute(Number(id));

    return response.status(201).json(result);
  }
}

export default ExamController;
