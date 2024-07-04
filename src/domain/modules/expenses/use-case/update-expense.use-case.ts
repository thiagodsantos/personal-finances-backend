import { Expense } from '@domain/modules/expenses/entity/expense.entity';

export abstract class UpdateExpenseUseCase {
  abstract execute(expense: Expense): Promise<void>;
}
