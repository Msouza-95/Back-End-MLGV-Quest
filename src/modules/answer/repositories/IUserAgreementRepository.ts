import ICreateUserAgreement from '../dtos/ICreateUserAgreement';
import UserAgreement from '../infra/typeorm/entities/UserAgreement';

export default interface IUserAgreementRepository {
  create(data: ICreateUserAgreement): Promise<UserAgreement>;
  findByID(id: number): Promise<UserAgreement | undefined>;
  findByExamID(exam_id: number): Promise<UserAgreement | undefined>;
}
