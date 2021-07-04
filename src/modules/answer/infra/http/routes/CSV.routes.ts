import { Router } from 'express';

import ensureAuthenticated from '@modules/user/infra/http/middleware/ensureAuthenticated';

import CSVController from '../controllers/CSVController';

const csvRoutes = Router();
const csvController = new CSVController();

csvRoutes.use(ensureAuthenticated);

csvRoutes.get('/', csvController.create);

export default csvRoutes;
