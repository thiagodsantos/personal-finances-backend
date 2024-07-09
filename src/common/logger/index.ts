export abstract class Logger {
  constructor() {
    this.configure();
  }

  abstract configure(): void;
  abstract info(message: string): void;
  abstract error(message: string): void;
  abstract warn(message: string): void;
}
