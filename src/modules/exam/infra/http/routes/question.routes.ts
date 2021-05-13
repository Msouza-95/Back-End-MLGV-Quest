import { Router } from 'express';

import QuestionController from '../controllers/QuestionController';

const questionRoutes = Router();
const questionController = new QuestionController();

questionRoutes.post('/', questionController.create);
questionRoutes.get('/:id', questionController.index); // passa um id do examQuestionGroup todas as question

export default questionRoutes;
