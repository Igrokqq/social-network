import * as Express from 'express';
import AuthService from './service';
import UserService from '../Users/service';
import { User } from '../Users/interfaces/user';

class AuthController {
  private readonly authService: AuthService;

  private readonly userService: UserService;

  constructor() {
    this.authService = new AuthService();
    this.userService = new UserService();
  }

  async signUp(req: Express.Request, res: Express.Response, next: Express.NextFunction): Promise<void> {
    try {
      console.log('LOG');
      // const user: User = await this.userService.create(req.body);

      res.json({
        status: 200,
        data: [],
      });
    } catch (error) {
      console.error(error);

      res.json({
        status: 500,
        message: 'ServerInternalError',
        details: [],
      });
      next(error);
    }
  }
}
export default new AuthController();
