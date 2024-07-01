import { Id } from '@domain/value-objects/id.value-object';

export interface DeleteExpenseUseCase {
  execute(expenseId: Id): Promise<void>;
}