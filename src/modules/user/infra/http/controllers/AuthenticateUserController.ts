import AuthenticateUserService from '@modules/user/services/AuthenticateUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class AuthenticateUserController {
  public async create(
    resquest: Request,
    response: Response,
  ): Promise<Response> {
    const { password, email } = resquest.body;
    console.log('controle authuser');

    const authenticateUserService = container.resolve(AuthenticateUserService);

    const authenticateToken = await authenticateUserService.execute({
      password,
      email,
    });

    return response.json({ authenticateToken });
  }
}

export default AuthenticateUserController;
