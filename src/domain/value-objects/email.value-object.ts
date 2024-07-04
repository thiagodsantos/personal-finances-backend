import { ValueObject } from '@domain/value-objects/@value-object';

export class Email implements ValueObject {
  private constructor(private readonly value: string) {}

  public static create(email: string): Email {
    if (!Email.isValid(email)) {
      throw new Error('Invalid email');
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
