import { ValueObject } from '@domain/value-objects/@value-object';
import { ValueObjectError } from '@domain/value-objects/error/value-object.error';

export class Text implements ValueObject {
  private constructor(private readonly value: string) {}

  public static create(text: string): Text {
    if (!Text.isValid(text)) {
      throw new ValueObjectError('Invalid text');
    }

    return new Text(text);
  }

  public getValue(): string {
    return this.value;
  }

  private static isValid(text: string): boolean {
    return Boolean(text.length);
  }
}
