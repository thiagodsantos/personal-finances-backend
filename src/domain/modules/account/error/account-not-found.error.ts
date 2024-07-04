import { DomainError } from '@domain/error/domain.error';
import { Id } from '@domain/value-objects/id.value-object';

export class AccountNotFoundError extends DomainError {
  constructor(accountId: Id) {
    super(`Account with id ${accountId.getValue()} not found`);
  }
}
