import { Id } from '@domain/value-objects/id.value-object';
import { Account, AccountType } from './account.entity';
import { Name } from '@domain/value-objects/name.value-object';

export const ACCOUNT_MOCK = Account.create({
  id: Id.create('test_id'),
  name: Name.create('test_name'),
  type: AccountType.CREDIT_CARD,
});

describe('AccountEntity', () => {
  it('should getters return values', () => {
    const account = ACCOUNT_MOCK;

    expect(account.getId().getValue()).toBe(ACCOUNT_MOCK.getId().getValue());
    expect(account.getName().getValue()).toBe(ACCOUNT_MOCK.getName().getValue());
    expect(account.getType()).toBe(ACCOUNT_MOCK.getType());
  });
});
