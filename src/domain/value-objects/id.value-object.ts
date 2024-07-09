import { ValueObject } from '@domain/value-objects/@value-object';
import { ValueObjectError } from '@domain/value-objects/error/value-object.error';

export class Id implements ValueObject {
  private constructor(private readonly value: string) {}

  public static create(id: string): Id {
    if (!Id.isValid(id)) {
      throw new ValueObjectError('Invalid id');
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
