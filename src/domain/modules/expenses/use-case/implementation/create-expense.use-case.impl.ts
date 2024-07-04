import { CreateExpenseUseCase } from '@domain/modules/expenses/use-case/create-expense.use-case';
import { Expense } from '@domain/modules/expenses/entity/expense.entity';
import { ExpenseRepository } from '@domain/modules/expenses/repository/expense.repository';

export class CreateExpenseUseCaseImpl extends CreateExpenseUseCase {
  constructor(private readonly expenseRepository: ExpenseRepository) {
    super();
  }

  public async execute(expense: Expense): Promise<void> {
    await this.expenseRepository.create(expense);
  }
}
