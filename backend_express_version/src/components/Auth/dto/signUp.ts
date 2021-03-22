import { SignUp } from '../interfaces/signUp';

class SignUpDto {
  private readonly user: SignUp;

  constructor(user: SignUp) {
    this.user = user;
  }

  public validate(): any {
    return false;
  }
}
