import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ShowCLassService from '@modules/course/services/ShowCLassService';

class ShowCLassController {
  public async create(request: Request, response: Response): Promise<Response> {
    const showCLassService = container.resolve(ShowCLassService);

    const classs = await showCLassService.execute();

    return response.json(classs);
  }
}

export default ShowCLassController;
