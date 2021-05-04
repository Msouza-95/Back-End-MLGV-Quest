import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/', (request, response) => {
  return response.json({ message: 'Rota de users sacou' });
});

export default usersRouter;
