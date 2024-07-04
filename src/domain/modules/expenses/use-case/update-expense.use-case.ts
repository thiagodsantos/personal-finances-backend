import { Expense } from '@domain/modules/expenses/entity/expense.entity';

export interface UpdateExpenseUseCase {
  execute(expense: Expense): Promise<void>;
}
