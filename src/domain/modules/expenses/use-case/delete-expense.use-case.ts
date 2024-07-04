import { Id } from '@domain/value-objects/id.value-object';

export abstract class DeleteExpenseUseCase {
  abstract execute(expenseId: Id): Promise<void>;
}
