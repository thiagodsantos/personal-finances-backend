import { ValueObject } from '@domain/value-objects/@value-object';
import { ValueObjectError } from '@domain/value-objects/error/value-object.error';

export class Url implements ValueObject {
  private constructor(private readonly value: string) {}

  public static create(url: string): Url {
    if (!Url.isValid(url)) {
      throw new ValueObjectError('Invalid url');
    }

    return new Url(url);
  }

  public getValue(): string {
    return this.value;
  }

  private static isValid(url: string): boolean {
    return Boolean(url.length);
  }
}
