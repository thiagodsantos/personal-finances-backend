import { Expense } from '@domain/modules/expenses/entity/expense.entity';

export interface CreateExpenseUseCase {
  execute(expense: Expense): Promise<void>;
}
