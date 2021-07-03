import { Router } from 'express';

import ensureAuthenticated from '@modules/user/infra/http/middleware/ensureAuthenticated';

import ShowCLassController from '../controllers/ShowCLassController';

const classRoutes = Router();
const showClassController = new ShowCLassController();

classRoutes.use(ensureAuthenticated);

classRoutes.get('/', showClassController.create);

export default classRoutes;
