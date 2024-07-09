import winston from 'winston';
import { Logger } from '@common/logger';

export class WinstonLogger extends Logger {
  private logger: winston.Logger;

  configure(): void {
    this.logger = winston.createLogger({
      format: winston.format.json(),
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.label({ label: 'personal-finances' }),
            winston.format.colorize(),
            winston.format.simple()
          ),
        }),
      ],
    });
  }

  error(message: string): void {
    this.logger.error(message);
  }

  info(message: string): void {
    this.logger.info(message);
  }

  warn(message: string): void {
    this.logger.warn(message);
  }
}
