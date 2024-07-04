import { ValueObject } from '@domain/value-objects/@value-object';

export class Flag implements ValueObject {
  constructor(private readonly value: boolean) {}

  public static create(value: boolean): Flag {
    return new Flag(value);
  }

  getValue(): boolean {
    return this.value;
  }
}
