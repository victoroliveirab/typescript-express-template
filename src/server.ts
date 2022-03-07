import '@app/config/env';

import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import helmet from 'helmet';

import routes from '@app/routes';
import errorHandler from '@app/lib/middleware/error-handler';
import { NotFoundError } from '@app/lib/errors';

class App {
  app: express.Express;
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(logger(process.env.LOGGER || 'dev'));
    this.app.use(
      express.json({
        limit: 300_000,
      })
    );
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
    this.app.use(helmet());
  }

  private routes() {
    this.app.use(routes);
    this.app.use(this.notFoundError);
    this.app.use(errorHandler);
  }

  private notFoundError(
    req: express.Request,
    _res: express.Response,
    next: express.NextFunction
  ) {
    next(new NotFoundError(`${req.method} ${req.url} not found`));
  }
}

export default new App().app;
