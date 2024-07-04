import { ValueObject } from '@domain/value-objects/value-object';

export class Id extends ValueObject {
  private constructor(private readonly value: string) {
    super();
  }

  public static create(id: string): Id {
    return new Id(id);
  }

  public getValue(): string {
    return this.value ?? '';
  }
}
