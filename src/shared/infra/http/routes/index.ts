import { Router } from 'express';

import copyExamRoutes from '@modules/exam/infra/http/routes/copyExam.routes';
import examRoutes from '@modules/exam/infra/http/routes/exam.routes';
import positonQuestionGroupRoutes from '@modules/exam/infra/http/routes/positionQuestionGroup.routes';
import questionRoutes from '@modules/exam/infra/http/routes/question.routes';
import questionGroupRoutes from '@modules/exam/infra/http/routes/questionGroup.routes';
import authenticateRoutes from '@modules/user/infra/http/routes/authenticate.routes';
import usersRouter from '@modules/user/infra/http/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/session', authenticateRoutes);
routes.use('/exam', examRoutes);
routes.use('/question', questionRoutes);
routes.use('/questiongroup', questionGroupRoutes);
routes.use('/positionquestiongroup', positonQuestionGroupRoutes);
routes.use('/copyexam', copyExamRoutes);

export default routes;
