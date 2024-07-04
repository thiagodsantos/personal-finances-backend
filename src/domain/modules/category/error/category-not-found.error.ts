import { DomainError } from '@domain/error/domain.error';
import { Id } from '@domain/value-objects/id.value-object';

export class CategoryNotFoundError extends DomainError {
  constructor(categodyId: Id) {
    super(`Category with id ${categodyId.getValue()} not found`);
  }
}
