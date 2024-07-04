import { DomainError } from '@domain/error/domain.error';
import { Id } from '@domain/value-objects/id.value-object';

export class SubCategoryNotFoundError extends DomainError {
  constructor(revenueId: Id) {
    super(`Revenue with id ${revenueId.getValue()} not found`);
  }
}
