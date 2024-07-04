import { ValueObject } from '@domain/value-objects/@value-object';

export class Money implements ValueObject {
  constructor(private readonly value: number) {}

  public static create(value: number): Money {
    if (value < 0) {
      throw new Error('Invalid money');
    }
    
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
