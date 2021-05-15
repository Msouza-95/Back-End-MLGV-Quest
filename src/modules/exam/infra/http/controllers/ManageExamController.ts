import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ManageExamService from '@modules/exam/services/ManageExamService';

class ManageExamController {
  public async addGroupExam(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { exam_id, question_group_id } = request.body;

    const manageExamService = container.resolve(ManageExamService);

    const examquestion = await manageExamService.execute({
      exam_id,
      question_group_id,
    });

    return response.status(200).json(examquestion);
  }
}

export default ManageExamController;
