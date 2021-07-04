import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SeedService from '@modules/course/services/SeedService';

class SeedContoller {
  public async create(request: Request, response: Response): Promise<Response> {
    const { course } = request.body;

    const seedSercice = container.resolve(SeedService);
    const seed = await seedSercice.execute(course);

    return response.json(seed);
  }
}

export default SeedContoller;
