import { ValueObject } from '@domain/value-objects/value-object';

export class Date extends ValueObject {
  constructor(private readonly value: Date) {
    super();
  }

  public static create(value: Date): Date {
    return new Date(value);
  }

  getValue(): Date {
    return this.value;
  }
}
