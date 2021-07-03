import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/user/services/CreateUserService';
import ShowUserService from '@modules/user/services/ShowUserService';

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

    return response.json({ UserService });
  }
  public async index(resquest: Request, response: Response): Promise<Response> {
    const { email, password, enrollment, type } = resquest.body;

    const showUserService = container.resolve(ShowUserService);

    const user = await showUserService.execute();

    return response.json({ user });
  }
}

export default UserController;
