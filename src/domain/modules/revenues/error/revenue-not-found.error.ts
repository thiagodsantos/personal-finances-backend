import { Id } from '@domain/value-objects/id.value-object';

export class RevenueNotFoundError extends Error {
  constructor(id: Id) {
    super(`Revenue with id ${id.getValue()} not found`);
  }
}
