import { ValueObject } from '@domain/value-objects/value-object';

export class Url extends ValueObject {
  private constructor(private readonly value: string) {
    super();
  }

  public static create(url: string): Url {
    return new Url(url);
  }

  public getValue(): string {
    return this.value ?? '';
  }
}