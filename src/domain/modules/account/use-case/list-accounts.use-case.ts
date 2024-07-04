import { Account } from '@domain/modules/account/entity/account.entity';

export abstract class ListAccountsUseCase {
  abstract execute(): Promise<Account[]>;
}
