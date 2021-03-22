import { Router as ExpressRouter } from 'express';
import HomeController from './controller';

class HomeRouter {
    private readonly router: ExpressRouter = ExpressRouter();

    public init(): HomeRouter {
      this.router.get('/ping', HomeController.ping);

      return this;
    }

    public getRouter(): ExpressRouter {
      return this.router;
    }
}

export default new HomeRouter().init().getRouter();
