import { ValueObject } from '@domain/value-objects/@value-object';
import { ValueObjectError } from '@domain/value-objects/error/value-object.error';

export class Name implements ValueObject {
  private constructor(private readonly value: string) {}

  public static create(name: string): Name {
    if (!Name.isValid(name)) {
      throw new ValueObjectError('Invalid name');
    }

    return new Name(name);
  }

  public getValue(): string {
    return this.value;
  }

  private static isValid(name: string): boolean {
    return Boolean(name.length);
  }
}
