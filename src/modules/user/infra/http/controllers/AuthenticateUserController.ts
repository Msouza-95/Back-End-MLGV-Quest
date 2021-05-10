import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserService from '@modules/user/services/AuthenticateUserService';

class AuthenticateUserController {
  public async create(
    resquest: Request,
    response: Response,
  ): Promise<Response> {
    const { password, email } = resquest.body;

    const authenticateUserService = container.resolve(AuthenticateUserService);

    const authenticateToken = await authenticateUserService.execute({
      password,
      email,
    });
    console.log('controle authuser');
    return response.json({ authenticateToken });
  }
}

export default AuthenticateUserController;
