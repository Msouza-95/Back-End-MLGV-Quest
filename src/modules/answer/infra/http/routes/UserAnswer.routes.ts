import { Router } from 'express';

import ensureAuthenticated from '@modules/user/infra/http/middleware/ensureAuthenticated';

import UserAnswerController from '../controllers/UserAnswerController';

const userAnswerRoutes = Router();
const userAnswerController = new UserAnswerController();

userAnswerRoutes.use(ensureAuthenticated);

userAnswerRoutes.post('/', userAnswerController.create);
userAnswerRoutes.get('/', userAnswerController.read);

export default userAnswerRoutes;
