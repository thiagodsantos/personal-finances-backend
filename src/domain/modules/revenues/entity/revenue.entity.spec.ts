import { createAccountMock } from '@domain/modules/account/entity/account.entity.spec';
import { createCategoryMock } from '@domain/modules/category/entity/category.entity.spec';

import { CustomDate } from '@domain/value-objects/custom-date.value-object';
import { Flag } from '@domain/value-objects/flag.value-object';
import { Id } from '@domain/value-objects/id.value-object';
import { Money } from '@domain/value-objects/money.value-object';
import { Numeric } from '@domain/value-objects/numeric.value-object';
import { Revenue, RevenueFrequency } from '@domain/modules/revenues/entity/revenue.entity';
import { Text } from '@domain/value-objects/text.value-object';

export const createRevenueMock = (overrides: Partial<Revenue> = {}): Revenue =>
  Revenue.create({
    account: createAccountMock(),
    amount: Money.create(100),
    category: createCategoryMock(),
    date: CustomDate.create(new Date('2021-01-01')),
    description: Text.create('test_description'),
    id: Id.create('test_id'),
    received: Flag.create(true),
    repeat: Flag.create(false),
    repeatTimes: Numeric.create(1),
    repeatTimesFrequency: RevenueFrequency.MONTHLY,
    ...overrides,
  });

describe('RevenueEntity', () => {
  const revenueMock: Revenue = createRevenueMock();

  it('should getters return values', () => {
    const revenue = createRevenueMock();

    expect(revenue.getAccount()).toEqual(revenueMock.getAccount());
    expect(revenue.getAmount().getValue()).toBe(revenueMock.getAmount().getValue());
    expect(revenue.getCategory()).toEqual(revenueMock.getCategory());
    expect(revenue.getDate().getValue()).toStrictEqual(revenueMock.getDate().getValue());
    expect(revenue.getDescription().getValue()).toBe(revenueMock.getDescription().getValue());
    expect(revenue.getId().getValue()).toBe(revenueMock.getId().getValue());
    expect(revenue.getReceived().getValue()).toBe(revenueMock.getReceived().getValue());
    expect(revenue.getRepeat().getValue()).toBe(revenueMock.getRepeat().getValue());
    expect(revenue.getRepeatTimes().getValue()).toBe(revenueMock.getRepeatTimes().getValue());
    expect(revenue.getRepeatTimesFrequency()).toBe(revenueMock.getRepeatTimesFrequency());
  });

  it('should sum correctly from getTotals', () => {
    const revenues = [createRevenueMock(), createRevenueMock()];

    expect(revenueMock.getTotals(revenues).getValue()).toBe(200);
  });
});
