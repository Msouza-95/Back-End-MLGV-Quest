import { Router } from 'express';

import PositonQuestionGroupController from '@modules/exam/infra/http/controllers/PositionQuestionGroupController';
import ensureAuthenticated from '@modules/user/infra/http/middleware/ensureAuthenticated';

const positonQuestionGroupRoutes = Router();
const positonQuestionGroupController = new PositonQuestionGroupController();

positonQuestionGroupRoutes.use(ensureAuthenticated);
positonQuestionGroupRoutes.post('/', positonQuestionGroupController.create);

export default positonQuestionGroupRoutes;
