import { Id } from '@domain/value-objects/id.value-object';
import { Account, AccountType } from './account.entity';
import { Name } from '@domain/value-objects/name.value-object';

describe('AccountEntity', () => {
  it('should getters return values', () => {
    const account = Account.create({
      id: Id.create('test_id'),
      name: Name.create('test_name'),
      type: AccountType.CREDIT_CARD,
    });

    expect(account.getId().getValue()).toBe('test_id');
    expect(account.getName().getValue()).toBe('test_name');
    expect(account.getType()).toBe(AccountType.CREDIT_CARD);
  });
});