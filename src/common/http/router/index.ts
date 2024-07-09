export interface RouterProps {
  port: number;
  name: string;
}

export abstract class Router {
  public name: string;
  public port: number;

  constructor(routerProps: RouterProps) {
    this.name = routerProps.name;
    this.port = routerProps.port;
  }

  abstract listen(): void;
}
