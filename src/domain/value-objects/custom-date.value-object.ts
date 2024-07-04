import { ValueObject } from '@domain/value-objects/@value-object';

export class CustomDate implements ValueObject {
  constructor(private readonly value: Date) {}

  public static create(value: Date): CustomDate {
    if (!CustomDate.isValid(value)) {
      throw new Error('Invalid date');
    }

    return new CustomDate(value);
  }

  getValue(): Date {
    return this.value;
  }

  private static isValid(value: Date): boolean {
    return Boolean(value);
  }
}
