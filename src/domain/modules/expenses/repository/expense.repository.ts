import { Id } from '@domain/value-objects/id.value-object';
import { Expense } from '@domain/modules/expenses/entity/expense.entity';

export abstract class ExpenseRepository {
  abstract create(expense: Expense): Promise<void>;
  abstract deleteById(expense: Id): Promise<void>;
  abstract getById(id: Id): Promise<Expense | null>;
  abstract update(expense: Expense): Promise<void>;
}
