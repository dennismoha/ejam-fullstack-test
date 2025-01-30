import express, { Router, Request, Response } from 'express';
import moment from 'moment';
import HTTP_STATUS from 'http-status-codes';
import { config } from '@src/config';

/*
  These routes are used to check the health of the server.
  each will return different status code if called

*/

class HealthRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  // returns 200 to check if the server is up or not
  public health(): Router {
    this.router.get('/health', (req: Request, res: Response) => {
      res
        .status(HTTP_STATUS.OK)
        .send(
          `HEALTH: SERVER INSTANCE IS HEALTH WITH PROCESS ID  ${process.pid} on ${moment().format('LL')} `,
        );
    });
    return this.router;
  }

  //displays the environment the server is in. either  development or production
  public env(): Router {
    this.router.get('/env', (req: Request, res: Response) => {
      res
        .status(HTTP_STATUS.OK)
        .send(`THIS IS THE  ${config.NODE_ENV} ENVIRONMENT `);
    });
    return this.router;
  }
}

export const healthRoutes: HealthRoutes = new HealthRoutes();
