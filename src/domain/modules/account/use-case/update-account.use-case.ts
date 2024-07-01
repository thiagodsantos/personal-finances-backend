import { Account } from '@domain/modules/account/entity/account.entity';

export interface UpdateAccountUseCase {
  execute(account: Account): Promise<void>;
}