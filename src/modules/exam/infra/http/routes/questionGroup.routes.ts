import { Router } from 'express';

import ensureAuthenticated from '@modules/user/infra/http/middleware/ensureAuthenticated';

import QuestionGroupController from '../controllers/QuestionGroupController';

const questionGroupRoutes = Router();
const questionGroupController = new QuestionGroupController();

questionGroupRoutes.use(ensureAuthenticated);
questionGroupRoutes.post('/', questionGroupController.create);

export default questionGroupRoutes;
