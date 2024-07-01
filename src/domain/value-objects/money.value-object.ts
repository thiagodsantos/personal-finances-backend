import { ValueObject } from '@domain/value-objects/value-object';

export class Money extends ValueObject {
  constructor(private readonly value: number) {
    super();
  }

  public static create(value: number): Money {
    return new Money(value);
  }

  getValue(): number {
    return this.value;
  }

  static sum(money: Money[]): Money {
    const total = money.reduce((acc, current) => acc + current.getValue(), 0);
    return Money.create(total);
  }
}