import { User } from '@domain/modules/user/entity/user.entity';

import { Email } from '@domain/value-objects/email.value-object';
import { Id } from '@domain/value-objects/id.value-object';
import { Name } from '@domain/value-objects/name.value-object';

export const createUserMock = (overrides: Partial<User> = {}): User =>
  User.create({
    email: Email.create('test_user@email.com'),
    id: Id.create('test_id'),
    name: Name.create('test_name'),
    ...overrides,
  });

describe('UserEntity', () => {
  const userMock: User = createUserMock();

  it('should create a valid user', () => {
    const user = createUserMock();

    expect(user.getId().getValue()).toBe(userMock.getId().getValue());
    expect(user.getName().getValue()).toBe(userMock.getName().getValue());
    expect(user.getEmail().getValue()).toBe(userMock.getEmail().getValue());
  });
});
