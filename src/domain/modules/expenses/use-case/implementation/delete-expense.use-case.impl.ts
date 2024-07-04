import { DeleteExpenseUseCase } from '@domain/modules/expenses/use-case/delete-expense.use-case';
import { ExpenseNotFoundError } from '@domain/modules/expenses/error/expense-not-found.error';
import { ExpenseRepository } from '@domain/modules/expenses/repository/expense.repository';
import { Id } from '@domain/value-objects/id.value-object';

export class DeleteExpenseUseCaseImpl extends DeleteExpenseUseCase {
  constructor(private readonly expenseRepository: ExpenseRepository) {
    super();
  }

  public async execute(expenseId: Id): Promise<void> {
    const expenseExists = await this.expenseRepository.getById(expenseId);
    if (!expenseExists) {
      throw new ExpenseNotFoundError(expenseId);
    }

    await this.expenseRepository.deleteById(expenseId);
  }
}
