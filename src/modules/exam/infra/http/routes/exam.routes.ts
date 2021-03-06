import { Router } from 'express';

import { ensureAdmin } from '@modules/user/infra/http/middleware/ensureAdmin';
import ensureAuthenticated from '@modules/user/infra/http/middleware/ensureAuthenticated';

import ExamController from '../controllers/ExamController';

const examRoutes = Router();
const examController = new ExamController();

examRoutes.use(ensureAuthenticated);
// examRoutes.use(ensureAdmin);
examRoutes.post('/', examController.create);
examRoutes.get('/', examController.index);
examRoutes.delete('/:id', examController.delete);
examRoutes.get('/:id', examController.read);
examRoutes.put('/:id', examController.update);

export default examRoutes;
