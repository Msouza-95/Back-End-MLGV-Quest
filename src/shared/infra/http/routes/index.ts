import authenticateRoutes from '@modules/user/infra/http/routes/authenticate.routes';
import usersRouter from '@modules/user/infra/http/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/session', authenticateRoutes);
export default routes;
