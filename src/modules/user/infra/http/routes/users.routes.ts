import { Router } from 'express';

import UserController from '../controllers/UserController';

const usersRouter = Router();

const userController = new UserController();

usersRouter.get('/', (request, response) => {
  return response.json({ message: 'Rota de users sacou' });
});
usersRouter.post('/', userController.create);

export default usersRouter;
