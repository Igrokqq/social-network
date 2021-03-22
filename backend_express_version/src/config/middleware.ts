import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
// @ts-ignore
import * as helmet from 'helmet';
import * as express from 'express';
import { join } from 'path';

export default class Middleware {
  public static init(app: express.Application) {
    app.use(express.static('public'));
    app.use(
      bodyParser.urlencoded({
        extended: false,
      }),
    );
    app.use(bodyParser.json());
    // parse Cookie header and populate req.cookies with an object keyed by the cookie names.
    // @ts-ignore
    app.use(cookieParser());
    // returns the compression middleware
    // @ts-ignore
    app.use(compression());
    // helps you secure your Express apps by setting various HTTP headers
    app.use(helmet());
    // providing a Connect/Express middleware that
    // can be used to enable CORS with various options
    // @ts-ignore
    app.use(cors());
    // cors
    app.use(
      (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ): void => {
        res.header(
          'Access-Control-Allow-Methods',
          'GET, POST, PUT, DELETE, OPTIONS ',
        );
        res.header('Access-Control-Allow-Credentials', '*');
        res.header(
          'Access-Control-Allow-Headers',
          'Origin, X-Requested-With,'
                    + ' Content-Type, Accept,'
                    + ' Authorization,'
                    + ' Access-Control-Allow-Credentials',
        );
        res.render(join(__dirname, '../', '../', 'frontend/public/', 'index.html'));
        next();
      },
    );
  }
}
