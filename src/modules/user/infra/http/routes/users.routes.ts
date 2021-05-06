import { Router } from 'express';

import AuthenticateUserController from '../controllers/AuthenticateUserController';

const usersRouter = Router();

usersRouter.get('/', (request, response) => {
  return response.json({ message: 'Rota de users sacou' });
});

export default usersRouter;
