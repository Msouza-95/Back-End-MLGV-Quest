import { Router } from 'express';

import ensureAuthenticated from '@modules/user/infra/http/middleware/ensureAuthenticated';

import QuestionController from '../controllers/QuestionController';

const questionRoutes = Router();
const questionController = new QuestionController();

questionRoutes.use(ensureAuthenticated);
questionRoutes.post('/', questionController.create);
questionRoutes.get('/:exam_id/:group_id', questionController.index); // passa um id do examQuestionGroup todas as question

export default questionRoutes;
