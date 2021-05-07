import { Router } from 'express';

import QuestionGroupController from '../controllers/QuestionGroupController';

const questionGroupRoutes = Router();
const questionGroupController = new QuestionGroupController();

questionGroupRoutes.post('/', questionGroupController.create);

export default questionGroupRoutes;
