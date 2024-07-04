import { Account } from '@domain/modules/account/entity/account.entity';

export interface CreateAccountUseCase {
  execute(account: Account): Promise<void>;
}
