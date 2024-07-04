import { createAccountMock } from '@domain/modules/account/entity/account.entity.spec';
import { createCategoryMock } from '@domain/modules/category/entity/category.entity.spec';

import { CustomDate } from '@domain/value-objects/custom-date.value-object';
import { Expense, ExpenseFrequency } from '@domain/modules/expenses/entity/expense.entity';
import { Flag } from '@domain/value-objects/flag.value-object';
import { Id } from '@domain/value-objects/id.value-object';
import { Money } from '@domain/value-objects/money.value-object';
import { Numeric } from '@domain/value-objects/numeric.value-object';
import { Text } from '@domain/value-objects/text.value-object';

export const createExpenseMock = (overrides: Partial<Expense> = {}): Expense =>
  Expense.create({
    account: createAccountMock(),
    amount: Money.create(100),
    category: createCategoryMock(),
    date: CustomDate.create(new Date('2021-01-01')),
    description: Text.create('test_description'),
    id: Id.create('test_id'),
    paid: Flag.create(true),
    repeat: Flag.create(false),
    repeatTimes: Numeric.create(1),
    repeatTimesFrequency: ExpenseFrequency.MONTHLY,
    ...overrides,
  });

describe('ExpenseEntity', () => {
  const expenseMock: Expense = createExpenseMock();

  it('should getters return values', () => {
    const expense = createExpenseMock();

    expect(expense.getAccount()).toEqual(expenseMock.getAccount());
    expect(expense.getAmount().getValue()).toBe(expenseMock.getAmount().getValue());
    expect(expense.getCategory()).toEqual(expenseMock.getCategory());
    expect(expense.getDate().getValue()).toStrictEqual(expenseMock.getDate().getValue());
    expect(expense.getDescription().getValue()).toBe(expenseMock.getDescription().getValue());
    expect(expense.getId().getValue()).toBe(expenseMock.getId().getValue());
    expect(expense.getPaid().getValue()).toBe(expenseMock.getPaid().getValue());
    expect(expense.getRepeat().getValue()).toBe(expenseMock.getRepeat().getValue());
    expect(expense.getRepeatTimes().getValue()).toBe(expenseMock.getRepeatTimes().getValue());
    expect(expense.getRepeatTimesFrequency()).toBe(expenseMock.getRepeatTimesFrequency());
  });

  it('should sum correctly from getTotals', () => {
    const expenses = [createExpenseMock(), createExpenseMock()];

    expect(expenseMock.getTotals(expenses).getValue()).toBe(200);
  });
});
