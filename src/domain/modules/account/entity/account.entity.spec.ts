import { Account, AccountType } from '@domain/modules/account/entity/account.entity';
import { Id } from '@domain/value-objects/id.value-object';
import { Name } from '@domain/value-objects/name.value-object';

export const createAccountMock = (overrides: Partial<Account> = {}): Account =>
  Account.create({
    id: Id.create('test_id'),
    name: Name.create('test_name'),
    type: AccountType.CREDIT_CARD,
    ...overrides,
  });

describe('AccountEntity', () => {
  const accountMock: Account = createAccountMock();
  it('should getters return values', () => {
    const account = createAccountMock();

    expect(account.getId().getValue()).toBe(accountMock.getId().getValue());
    expect(account.getName().getValue()).toBe(accountMock.getName().getValue());
    expect(account.getType()).toBe(accountMock.getType());
  });
});
