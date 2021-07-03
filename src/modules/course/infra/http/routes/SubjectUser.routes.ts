import { Router } from 'express';

import ensureAuthenticated from '@modules/user/infra/http/middleware/ensureAuthenticated';

import SubjectUserController from '../controllers/SubjectUserController';

const subjectUserRoutes = Router();
const subjectUserController = new SubjectUserController();

subjectUserRoutes.use(ensureAuthenticated);

subjectUserRoutes.get('/:id', subjectUserController.create);

export default subjectUserRoutes;
