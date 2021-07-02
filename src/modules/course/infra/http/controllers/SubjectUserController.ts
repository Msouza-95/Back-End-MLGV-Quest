import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SubjectUserService from '@modules/course/services/SubjectUserService';

import subjectUserRoutes from '../routes/SubjectUser.routes';

class SubjectUserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    console.log(id);
    const subjectUserService = container.resolve(SubjectUserService);

    const subject = await subjectUserService.execute(Number(id));

    return response.json(subject);
  }
}

export default SubjectUserController;
