import { createExpenseMock } from '@domain/modules/expenses/entity/expense.entity.spec';
import { createExpenseRepository } from '@domain/modules/expenses/repository/implementation/expense.repository.impl.spec';
import { DeleteExpenseUseCaseImpl } from '@domain/modules/expenses/use-case/implementation/delete-expense.use-case.impl';
import { ExpenseNotFoundError } from '@domain/modules/expenses/error/expense-not-found.error';
import { ExpenseRepository } from '@domain/modules/expenses/repository/expense.repository';

describe('DeleteExpenseUseCaseImpl', () => {
  let expenseRepository: jest.Mocked<ExpenseRepository>;
  let deleteExpenseUseCaseImpl: DeleteExpenseUseCaseImpl;

  beforeEach(() => {
    expenseRepository = createExpenseRepository();
    deleteExpenseUseCaseImpl = new DeleteExpenseUseCaseImpl(expenseRepository);
  });

  it('should delete an expense', async () => {
    const expense = createExpenseMock();

    expenseRepository.getById.mockResolvedValue(expense);

    await deleteExpenseUseCaseImpl.execute(expense.getId());

    expect(expenseRepository.getById).toHaveBeenCalledWith(expense.getId());
    expect(expenseRepository.deleteById).toHaveBeenCalledWith(expense.getId());
  });

  it('should throw an error if expense does not exist', async () => {
    const expense = createExpenseMock();

    expenseRepository.getById.mockResolvedValue(null);

    await expect(deleteExpenseUseCaseImpl.execute(expense.getId())).rejects.toThrow(
      ExpenseNotFoundError
    );
    expect(expenseRepository.getById).toHaveBeenCalledWith(expense.getId());
    expect(expenseRepository.deleteById).not.toHaveBeenCalled();
  });
});
