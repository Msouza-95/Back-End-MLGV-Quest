import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SubjectUserService from '@modules/course/services/SubjectUserService';

class SubjectUserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const subjectUserService = container.resolve(SubjectUserService);

    const subject = await subjectUserService.execute(Number(id));

    return response.json(subject);
  }
}

export default SubjectUserController;
