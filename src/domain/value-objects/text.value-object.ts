import { ValueObject } from '@domain/value-objects/value-object';

export class Text extends ValueObject {
  private constructor(private readonly value: string) {
    super();
  }

  public static create(text?: string): Text {
    return new Text(text ?? '');
  }

  public getValue(): string {
    return this.value;
  }
}