import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCSVService from '@modules/answer/services/CreateCSVService';

class CSVController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { exam_id } = request.params;
    const createCSVService = container.resolve(CreateCSVService);

    console.log(exam_id);
    const CSV = await createCSVService.execute(Number(exam_id));

    return response.json(CSV);
  }
}

export default CSVController;
