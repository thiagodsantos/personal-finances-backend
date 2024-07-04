import { Expense } from '@domain/modules/expenses/entity/expense.entity';

export abstract class CreateExpenseUseCase {
  abstract execute(expense: Expense): Promise<void>;
}
