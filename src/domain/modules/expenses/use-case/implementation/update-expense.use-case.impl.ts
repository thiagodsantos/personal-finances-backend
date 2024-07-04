import { Expense } from '@domain/modules/expenses/entity/expense.entity';
import { ExpenseNotFoundError } from '@domain/modules/expenses/error/expense-not-found.error';
import { ExpenseRepository } from '@domain/modules/expenses/repository/expense.repository';
import { UpdateExpenseUseCase } from '@domain/modules/expenses/use-case/update-expense.use-case';

export class UpdateExpenseUseCaseImpl extends UpdateExpenseUseCase {
  constructor(private readonly expenseRepository: ExpenseRepository) {
    super();
  }

  async execute(expense: Expense): Promise<void> {
    const expenseExists = await this.expenseRepository.getById(expense.getId());
    if (!expenseExists) {
      throw new ExpenseNotFoundError(expense.getId());
    }

    await this.expenseRepository.update(expense);
  }
}
