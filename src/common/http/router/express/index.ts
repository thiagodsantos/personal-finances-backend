import express, { Application } from 'express';
import { Router, RouterProps } from '@common/http/router';

export class ExpressRouter extends Router {
  public app: Application;

  constructor(routerProps: RouterProps) {
    super(routerProps);

    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Router ${this.name} listening on port ${this.port}`);
    });
  }
}
