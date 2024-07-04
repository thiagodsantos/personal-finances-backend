import { Account, AccountType } from '@domain/modules/account/entity/account.entity'
import { Id } from '@domain/value-objects/id.value-object'
import { Name } from '@domain/value-objects/name.value-object'

export const createAccount = (overrides: Partial<Account> = {}): Account => {
  return Account.create({
    id: Id.create('test_id'),
    name: Name.create('test_name'),
    type: AccountType.CREDIT_CARD,
    ...overrides,
  });
}