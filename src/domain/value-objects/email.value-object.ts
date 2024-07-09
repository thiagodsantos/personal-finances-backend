import { ValueObject } from '@domain/value-objects/@value-object';
import { ValueObjectError } from '@domain/value-objects/error/value-object.error';

export class Email implements ValueObject {
  private constructor(private readonly value: string) {}

  public static create(email: string): Email {
    if (!Email.isValid(email)) {
      throw new ValueObjectError('Invalid email');
    }

    return new Email(email);
  }

  public getValue(): string {
    return this.value;
  }

  private static isValid(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
