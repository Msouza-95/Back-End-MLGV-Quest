import { Router } from 'express';

import ensureAuthenticated from '@modules/user/infra/http/middleware/ensureAuthenticated';

import QuestionGroupController from '../controllers/QuestionGroupController';

const questionGroupRoutes = Router();
const questionGroupController = new QuestionGroupController();

questionGroupRoutes.use(ensureAuthenticated);
questionGroupRoutes.post('/', questionGroupController.create);
// questionGroupRoutes.get('/', questionGroupController.index);
questionGroupRoutes.get('/:id', questionGroupController.read);
questionGroupRoutes.delete('/:id', questionGroupController.delete);
questionGroupRoutes.put('/:id', questionGroupController.update);

export default questionGroupRoutes;
