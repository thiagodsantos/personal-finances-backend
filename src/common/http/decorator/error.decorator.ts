import { Request, Response, NextFunction } from 'express';

import { DomainError } from '@domain/error/domain.error';
import { ValueObjectError } from '@domain/value-objects/error/value-object.error';

export default function expressErrorHandler(): MethodDecorator {
  return function (_: unknown, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
      try {
        return await originalMethod.apply(this, [req, res, next]);
      } catch (error) {
        console.log({ error });
        console.error(`Exception caught in method ${String(propertyKey)}:`);

        if (error instanceof ValueObjectError) {
          return res.status(400).json({ error: error.message });
        }

        if (error instanceof DomainError) {
          return res.status(400).json({ error: error.message });
        }

        res.status(500).json({ error: 'Internal Server Error' });
      }
    };

    return descriptor;
  };
}
