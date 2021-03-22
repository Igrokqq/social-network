import * as express from 'express';
import * as http from 'http';

const HomeRouter = () => import('../components/Home/router');
const AuthRouter = () => import('../components/Auth/router');

export default class Router {
  public static init(app: express.Application): void {
    const router: express.Router = express.Router();

    app.use('/', HomeRouter);
    app.use('/v1/auth', AuthRouter);

    /**
     * @description No results returned mean the object is not found
     * @function
     * @inner
     * @param {callback} middleware - Express middleware.
     */
    app.use((req: express.Request, res: express.Response): void => {
      res.status(404).send(http.STATUS_CODES[404]);
    });

    /**
     * @function
     * @inner
     * @param {express.Router}
     */
    app.use(router);
  }
}
