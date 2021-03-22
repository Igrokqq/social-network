import { Router as ExpressRouter } from 'express';
import AuthController from './controller';

class AuthRouter {
    private readonly router: ExpressRouter = ExpressRouter();

    constructor() {
      // console.log('process.env.', process.env);
      this.router.get('/sign-up', AuthController.signUp);
    }

    public getRouter(): ExpressRouter {
      return this.router;
    }
}

export default new AuthRouter().getRouter();
