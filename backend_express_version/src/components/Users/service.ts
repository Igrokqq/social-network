import UserRepository from './repository';
import { SignUp } from '../Auth/interfaces/signUp';

export default class UserService {
    private readonly userRepository: UserRepository;

    constructor() {
      this.userRepository = new UserRepository();
    }

    public create(user: SignUp) {
      return this.userRepository.create(user);
    }
}
