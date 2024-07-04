import { Id } from '@domain/value-objects/id.value-object';
import { Account } from '../entity/account.entity';

export interface AccountRepository {
  create(account: Account): Promise<void>;
  delete(accountId: Id): Promise<void>;
  getById(accountId: Id): Promise<Account>;
  list(): Promise<Account[]>;
  update(account: Account): Promise<void>;
}
