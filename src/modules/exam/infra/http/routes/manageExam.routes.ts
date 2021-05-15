import { Router } from 'express';

import ManageExamController from '@modules/exam/infra/http/controllers/ManageExamController';
import ensureAuthenticated from '@modules/user/infra/http/middleware/ensureAuthenticated';

const manageExamRoutes = Router();
const manageExamController = new ManageExamController();

manageExamRoutes.use(ensureAuthenticated);
manageExamRoutes.post('/', manageExamController.addGroupExam);

export default manageExamRoutes;
