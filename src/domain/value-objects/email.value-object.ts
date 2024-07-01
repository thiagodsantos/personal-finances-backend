import { ValueObject } from '@domain/value-objects/value-object';

export class Email extends ValueObject {
  private constructor(private readonly value: string) {
    super();
  }

  public static create(email: string): Email {
    return new Email(email);
  }

  public getValue(): string {
    return this.value ?? '';
  }
}