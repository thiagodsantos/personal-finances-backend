import { Email } from '@domain/value-objects/email.value-object';
import { Id } from '@domain/value-objects/id.value-object';
import { User } from '@domain/modules/user/entity/user.entity';

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract getById(id: Id): Promise<User | null>;
  abstract getByEmail(email: Email): Promise<User | null>;
  abstract update(user: User): Promise<void>;
}
