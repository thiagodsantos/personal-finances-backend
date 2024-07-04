import { ValueObject } from '@domain/value-objects/@value-object';

export class Text implements ValueObject {
  private constructor(private readonly value: string) {}

  public static create(text: string): Text {
    if (!Text.isValid(text)) {
      throw new Error('Invalid text');
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
