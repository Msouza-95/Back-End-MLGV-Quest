import { Router } from 'express';

import examRoutes from '@modules/exam/infra/http/routes/exam.routes';
import questionRoutes from '@modules/exam/infra/http/routes/question.routes';
import questionGroupRoutes from '@modules/exam/infra/http/routes/questionGroup.routes';
import authenticateRoutes from '@modules/user/infra/http/routes/authenticate.routes';
import usersRouter from '@modules/user/infra/http/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/session', authenticateRoutes);
routes.use('/exam', examRoutes);
routes.use('/question', questionRoutes);
routes.use('/questiongroup', questionGroupRoutes);

export default routes;
