import { ValueObject } from '@domain/value-objects/value-object';

export class Name extends ValueObject {
  private constructor(private readonly value: string) {
    super();
  }

  public static create(name: string): Name {
    return new Name(name);
  }

  public getValue(): string {
    return this.value ?? '';
  }
}
