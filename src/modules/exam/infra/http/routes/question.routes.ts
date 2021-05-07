import { Router } from 'express';

import QuestionController from '../controllers/QuestionController';

const questionRoutes = Router();
const questionController = new QuestionController();

questionRoutes.post('/', questionController.create);

export default questionRoutes;
