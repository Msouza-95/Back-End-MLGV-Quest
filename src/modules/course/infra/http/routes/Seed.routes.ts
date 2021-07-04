import { Router } from 'express';

import ensureAuthenticated from '@modules/user/infra/http/middleware/ensureAuthenticated';

import SeedContoller from '../controllers/SeedController';

const seedRoutes = Router();
const seedController = new SeedContoller();

seedRoutes.use(ensureAuthenticated);

seedRoutes.get('/', seedController.create);

export default seedRoutes;
