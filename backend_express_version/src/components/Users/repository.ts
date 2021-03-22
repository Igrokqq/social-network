import { Model } from 'mongoose';
import userModel from './model';
import { SignUp } from '../auth/interfaces/signUp';
import { User } from './interfaces/user';

export default class UserRepository {
  private readonly userModel: Model<User>;

  constructor() {
    this.userModel = userModel.getSelf();
  }

  public create(user: SignUp) {
    return this.userModel.create(user);
  }
}
