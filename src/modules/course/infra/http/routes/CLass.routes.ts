import { Router } from 'express';

import ensureAuthenticated from '@modules/user/infra/http/middleware/ensureAuthenticated';

import ProfessorContoller from '../controllers/ProfessorController';
import ShowCLassController from '../controllers/ShowCLassController';
import StudenteController from '../controllers/StudentController';

const classRoutes = Router();
const showClassController = new ShowCLassController();
const professorController = new ProfessorContoller();
const studentController = new StudenteController();

classRoutes.use(ensureAuthenticated);

classRoutes.get('/', showClassController.create);
classRoutes.post('/student', studentController.create);
classRoutes.post('/professor', professorController.create);

export default classRoutes;
