import Auth from '@modules/user/infra/typeorm/entities/Auth';

import IAuthRepository from '../IAuthRepository';

class FakeAuthRepository implements IAuthRepository {
  private auths: Auth[] = [];
  public async findByUserID(user_id: number): Promise<Auth | undefined> {
    const findAuth = this.auths.find(auth => auth.user_id === user_id);

    return findAuth;
  }
}

export default FakeAuthRepository;
