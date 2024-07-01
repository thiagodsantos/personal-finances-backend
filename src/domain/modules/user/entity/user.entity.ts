import { Email } from '@domain/value-objects/email.value-object';
import { Id } from '@domain/value-objects/id.value-object';
import { Name } from '@domain/value-objects/name.value-object';

export interface UserProps {
  id: Id;
  name: Name;
  email: Email;
}

export class User {
  private readonly id: Id;
  private readonly name: Name;
  private readonly email: Email;

  private constructor(user: UserProps) {
    Object.assign(this, user);
  }

  static create(user: UserProps): User {
    return new User(user);
  }

  getId(): Id {
    return this.id;
  }

  getName(): Name {
    return this.name;
  }

  getEmail(): Email {
    return this.email;
  }
}