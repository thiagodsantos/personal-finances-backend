import { Account } from '@domain/modules/account/entity/account.entity';

export interface ListAccountsUseCase {
  execute(): Promise<Account[]>;
}
