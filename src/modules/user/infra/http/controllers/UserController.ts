import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/user/services/CreateUserService';

class UserController {
  public async create(
    resquest: Request,
    response: Response,
  ): Promise<Response> {
    const { email, password, enrollment, type } = resquest.body;

    const createUserService = container.resolve(CreateUserService);

    const UserService = await createUserService.execute({
      email,
      password,
      enrollment,
      type,
    });

    console.log('controle user');
    return response.json({ UserService });
  }
}

export default UserController;
