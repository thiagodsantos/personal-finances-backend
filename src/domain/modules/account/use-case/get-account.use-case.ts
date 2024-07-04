import { Account } from '@domain/modules/account/entity/account.entity';
import { Id } from '@domain/value-objects/id.value-object';

export interface GetAccountUseCase {
  execute(accountId: Id): Promise<Account>;
}
