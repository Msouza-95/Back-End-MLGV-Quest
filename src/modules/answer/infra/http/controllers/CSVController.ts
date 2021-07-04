import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCSVService from '@modules/answer/services/CreateCSVService';

class CSVController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { exam_id } = request.body;
    const createCSVService = container.resolve(CreateCSVService);

    const CSV = await createCSVService.execute(exam_id);

    return response.json(CSV);
  }
}

export default CSVController;
