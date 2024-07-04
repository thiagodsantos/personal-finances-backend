import { DomainError } from '@domain/error/domain.error';
import { Id } from '@domain/value-objects/id.value-object';

export class ExpenseNotFoundError extends DomainError {
  constructor(expenseId: Id) {
    super(`Expense with id ${expenseId.getValue()} not found`);
  }
}
