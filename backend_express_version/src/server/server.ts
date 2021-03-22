import * as express from 'express';
import { Router } from '../config/router';
import { Middleware } from '../config/middleware';

class Server {
    // @ts-ignore
    private readonly server: express.Application = express();

    constructor() {
      Middleware.init(this.server);
      Router.init(this.server);

      // console.log('process.env.PORT', process.env.PORT);
      this.server.set('port', process.env.PORT);
    }

    getSelf(): express.Application {
      return this.server;
    }
}

export default new Server().getSelf();
