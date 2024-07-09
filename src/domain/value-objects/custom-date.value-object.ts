import { ValueObject } from '@domain/value-objects/@value-object';
import { ValueObjectError } from '@domain/value-objects/error/value-object.error';

export class CustomDate implements ValueObject {
  constructor(private readonly value: Date) {}

  public static create(value: Date): CustomDate {
    if (!CustomDate.isValid(value)) {
      throw new ValueObjectError('Invalid date');
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
