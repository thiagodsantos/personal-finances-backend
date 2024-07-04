import { ValueObject } from '@domain/value-objects/@value-object';

export class Numeric implements ValueObject {
  constructor(private readonly value: number) {}

  public static create(value: number): Numeric {
    return new Numeric(value);
  }

  getValue(): number {
    return this.value;
  }
}
