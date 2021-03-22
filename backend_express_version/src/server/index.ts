// import * as http from 'http';
// import Events from './events';
// import Server from './server';
//
// class App {
//     private readonly port: number = Server.get('port');
//
//     public run(): void {
//       Events.bind(
//         http.createServer(Server).listen(this.port),
//         this.port,
//       );
//     }
// }
//
// new App().run();

import * as Express from 'express';
import { join } from 'path';
import Middleware from '../config/middleware';
import Router from '../config/router';
import GlobalVariables from '../config/globalVariables';
import Env from '../config/env';

async function bootstrap(): Promise<void> {
  const app: Express.Application = Express();
  Env.init(join(__dirname, '../../', '.env'));
  await GlobalVariables.init();
  Middleware.init(app);
  Router.init(app);

  const port = process.env.PORT;

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

bootstrap();
