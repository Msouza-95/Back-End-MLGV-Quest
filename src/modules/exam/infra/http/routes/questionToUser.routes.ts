import { Router } from 'express';

import ensureAuthenticated from '@modules/user/infra/http/middleware/ensureAuthenticated';

import QuestionToUserController from '../controllers/QuestionToUserController';

const questionToUserRoutes = Router();
const questionToUserController = new QuestionToUserController();

questionToUserRoutes.use(ensureAuthenticated);
questionToUserRoutes.get('/:exam_id', questionToUserController.read);

export default questionToUserRoutes;
