import { Email } from '@domain/value-objects/email.value-object';

export class UserAlreadyExistsError extends Error {
  constructor(email: Email) {
    super(`User with email ${email.getValue()} already exists`);
  }
}
