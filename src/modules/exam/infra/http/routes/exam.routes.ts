import { Router } from 'express';

import ExamController from '../controllers/ExamController';

const examRoutes = Router();
const examController = new ExamController();

examRoutes.post('/', examController.create);
examRoutes.get('/', examController.index);
examRoutes.delete('/:id', examController.delete);

export default examRoutes;
