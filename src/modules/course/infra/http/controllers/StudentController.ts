import { Request, Response } from 'express';
import { container } from 'tsyringe';

import EnrollClassService from '@modules/course/services/EnrollClassService';

class StudenteController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { user_id, class_id } = request.body;

    const enrollClassService = container.resolve(EnrollClassService);

    const student = await enrollClassService.execute({
      id: user_id,
      class_id,
      tipo: 'Student',
    });

    return response.json(student);
  }
}

export default StudenteController;
