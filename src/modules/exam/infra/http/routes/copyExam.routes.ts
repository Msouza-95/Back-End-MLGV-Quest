import { Router } from 'express';

import ensureAuthenticated from '@modules/user/infra/http/middleware/ensureAuthenticated';

import CopyExamContoller from '../controllers/CopyExamController';

const copyExamRoutes = Router();
const copyExamContoller = new CopyExamContoller();

copyExamRoutes.use(ensureAuthenticated);

copyExamRoutes.post('/:id', copyExamContoller.create);

export default copyExamRoutes;
