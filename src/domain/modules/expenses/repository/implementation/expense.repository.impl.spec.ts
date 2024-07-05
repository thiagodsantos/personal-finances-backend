import { ExpenseRepository } from '@domain/modules/expenses/repository/expense.repository';

export const createExpenseRepository = (): jest.Mocked<ExpenseRepository> => {
  return {
    create: jest.fn(),
    deleteById: jest.fn(),
    getById: jest.fn(),
    update: jest.fn(),
  };
};

describe('ExpenseRepository', () => {
  it('should be true', () => {
    expect(true).toBeTruthy();
  });
});
