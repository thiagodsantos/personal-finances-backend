import { ValueObject } from '@domain/value-objects/@value-object';

export class Name implements ValueObject {
  private constructor(private readonly value: string) {}

  public static create(name: string): Name {
    if (!Name.isValid(name)) {
      throw new Error('Invalid name');
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
