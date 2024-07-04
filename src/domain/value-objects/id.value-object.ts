import { ValueObject } from '@domain/value-objects/@value-object';

export class Id implements ValueObject {
  private constructor(private readonly value: string) {}

  public static create(id: string): Id {
    if (!Id.isValid(id)) {
      throw new Error('Invalid id');
    }

    return new Id(id);
  }

  public getValue(): string {
    return this.value;
  }

  private static isValid(id: string): boolean {
    return Boolean(id.length);
  }
}
