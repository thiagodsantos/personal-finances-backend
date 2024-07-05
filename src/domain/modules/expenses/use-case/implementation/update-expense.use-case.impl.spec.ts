import { createExpenseMock } from '@domain/modules/expenses/entity/expense.entity.spec';
import { createExpenseRepository } from '@domain/modules/expenses/repository/implementation/expense.repository.impl.spec';
import { ExpenseNotFoundError } from '@domain/modules/expenses/error/expense-not-found.error';
import { ExpenseRepository } from '@domain/modules/expenses/repository/expense.repository';
import { UpdateExpenseUseCaseImpl } from '@domain/modules/expenses/use-case/implementation/update-expense.use-case.impl';

describe('UpdateExpenseUseCaseImpl', () => {
  let expenseRepository: jest.Mocked<ExpenseRepository>;
  let updateExpenseUseCaseImpl: UpdateExpenseUseCaseImpl;

  beforeEach(() => {
    expenseRepository = createExpenseRepository();
    updateExpenseUseCaseImpl = new UpdateExpenseUseCaseImpl(expenseRepository);
  });

  it('should update an expense', async () => {
    const expense = createExpenseMock();

    expenseRepository.getById.mockResolvedValue(expense);

    await updateExpenseUseCaseImpl.execute(expense);

    expect(expenseRepository.getById).toHaveBeenCalledWith(expense.getId());
    expect(expenseRepository.update).toHaveBeenCalledWith(expense);
  });

  it('should throw an error if expense does not exist', async () => {
    const expense = createExpenseMock();

    expenseRepository.getById.mockResolvedValue(null);

    await expect(updateExpenseUseCaseImpl.execute(expense)).rejects.toThrow(ExpenseNotFoundError);
    expect(expenseRepository.getById).toHaveBeenCalledWith(expense.getId());
    expect(expenseRepository.update).not.toHaveBeenCalled();
  });
});
