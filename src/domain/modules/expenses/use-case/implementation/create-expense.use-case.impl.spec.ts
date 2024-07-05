import { createExpenseMock } from '@domain/modules/expenses/entity/expense.entity.spec';
import { createExpenseRepository } from '@domain/modules/expenses/repository/implementation/expense.repository.impl.spec';
import { CreateExpenseUseCaseImpl } from '@domain/modules/expenses/use-case/implementation/create-expense.use-case.impl';
import { ExpenseRepository } from '@domain/modules/expenses/repository/expense.repository';

describe('CreateExpenseUseCaseImpl', () => {
  let expenseRepository: jest.Mocked<ExpenseRepository>;
  let createExpenseUseCaseImpl: CreateExpenseUseCaseImpl;

  beforeEach(() => {
    expenseRepository = createExpenseRepository();
    createExpenseUseCaseImpl = new CreateExpenseUseCaseImpl(expenseRepository);
  });

  it('should create an expense', async () => {
    const expense = createExpenseMock();

    await createExpenseUseCaseImpl.execute(expense);

    expect(expenseRepository.create).toHaveBeenCalledWith(expense);
  });
});
