import { Account } from '../entity/account.entity';
import { Id } from '@domain/value-objects/id.value-object';

export abstract class AccountRepository {
  abstract create(account: Account): Promise<void>;
  abstract delete(accountId: Id): Promise<void>;
  abstract getById(accountId: Id): Promise<Account>;
  abstract list(): Promise<Account[]>;
  abstract update(account: Account): Promise<void>;
}
