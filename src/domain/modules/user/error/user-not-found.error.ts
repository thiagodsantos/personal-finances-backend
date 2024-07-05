import { Email } from '@domain/value-objects/email.value-object';

export class UserNotFoundError extends Error {
  constructor(email: Email) {
    super(`User with email ${email.getValue()} not found`);
  }
}
