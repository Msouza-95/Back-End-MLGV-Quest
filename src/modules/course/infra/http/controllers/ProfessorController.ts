import { Request, Response } from 'express';
import { container } from 'tsyringe';

import EnrollClassService from '@modules/course/services/EnrollClassService';
import SubjectUserService from '@modules/course/services/SubjectUserService';

class ProfessorContoller {
  public async create(request: Request, response: Response): Promise<Response> {
    const { professor_id, class_id } = request.body;

    const enrollClassService = container.resolve(EnrollClassService);

    const professor = await enrollClassService.execute({
      id: professor_id,
      class_id,
      tipo: 'Professor',
    });

    return response.json(professor);
  }
}

export default ProfessorContoller;
