import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateExamService from '@modules/exam/services/CreateExamService';
import KeepExamService from '@modules/exam/services/KeepExamService';
import ShowExamService from '@modules/exam/services/ShowExamService';

import Exam from '../../typeorm/entities/Exam';

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

    // const newStarted_at = new Date(started_at);
    // const newEnded_at = new Date(ended_at);

    const createExamService = container.resolve(CreateExamService);

    const newExam = await createExamService.execute({
      title,
      description,
      started_at, // : newStarted_at,
      ended_at, // :newEnded_at,
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
    const operation = 'DELETE';

    const keepExamService = container.resolve(KeepExamService);

    const result = await keepExamService.execute(Number(id), { operation });

    return response.status(200).json(result);
  }

  public async read(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showExamService = container.resolve(ShowExamService);

    const exam = await showExamService.execute(Number(id));

    return response.status(201).json(exam);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      title,
      description,
      started_at,
      ended_at,
      allow_anonymous,
    } = request.body;

    const operation = 'UPDATE';

    const keepExamService = container.resolve(KeepExamService);

    const result = await keepExamService.execute(Number(id), {
      operation,
      title,
      description,
      started_at,
      ended_at,
      allow_anonymous,
    });

    return response.status(200).json(result);
  }
}

export default ExamController;
