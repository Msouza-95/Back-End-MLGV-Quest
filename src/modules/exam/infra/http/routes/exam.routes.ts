import { Router } from 'express';

import ExamController from '../controllers/ExamController';

const examRoutes = Router();
const examController = new ExamController();

examRoutes.post('/', examController.create);

export default examRoutes;
