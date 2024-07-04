import { Money } from '@domain/value-objects/money.value-object';

describe('MoneyValueObject', () => {
  it('should create a valid money', () => {
    const money = 10;

    const moneyValueObject = Money.create(money);

    expect(moneyValueObject.getValue()).toBe(money);
  });

  it('should throw an error for invalid money', () => {
    expect(() => Money.create(-1)).toThrow('Invalid money');
  });

  it('should sum all money', () => {
    const money1 = Money.create(10);
    const money2 = Money.create(20);
    const money3 = Money.create(30);

    const total = Money.sum([money1, money2, money3]);

    expect(total.getValue()).toBe(60);
  });
});
