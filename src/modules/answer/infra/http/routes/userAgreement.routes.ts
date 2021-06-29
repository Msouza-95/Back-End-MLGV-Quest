import { Router } from 'express';

import ensureAuthenticated from '@modules/user/infra/http/middleware/ensureAuthenticated';

import UserAgreementController from '../controllers/UserAgreementController';

const userAgreementRoutes = Router();
const userAgrementController = new UserAgreementController();

userAgreementRoutes.use(ensureAuthenticated);

userAgreementRoutes.post('/', userAgrementController.create);

export default userAgreementRoutes;
