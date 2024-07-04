import { ValueObject } from '@domain/value-objects/value-object';

export class Flag extends ValueObject {
  constructor(private readonly value: boolean) {
    super();
  }

  public static create(value: boolean): Flag {
    return new Flag(value);
  }

  getValue(): boolean {
    return this.value;
  }
}
