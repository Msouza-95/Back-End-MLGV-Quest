import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserAgreementService from '@modules/answer/services/CreateUserAgreementService';

class UserAgreementController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { exam_id, anoymous } = request.body;
    const { id } = request.user;
    const createUserAgreementService = container.resolve(
      CreateUserAgreementService,
    );

    const newUserAgreement = await createUserAgreementService.execute({
      exam_id,
      user_id: Number(id),
      anoymous,
    });

    return response.json(newUserAgreement);
  }
}

export default UserAgreementController;
