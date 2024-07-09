import express, { Application } from 'express';

interface RouterProps {
  port: number;
  name: string;
}

export class Router {
  public app: Application;
  public name: string;
  public port: number;

  constructor(routerProps: RouterProps) {
    this.app = express();

    this.name = routerProps.name;
    this.port = routerProps.port;

    this.initializeMiddlewares();
  }

  private initializeMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Router ${this.name} listening on port ${this.port}`);
    });
  }
}
