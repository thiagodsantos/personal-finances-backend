import { Account } from '@domain/modules/account/entity/account.entity';

export abstract class UpdateAccountUseCase {
  abstract execute(account: Account): Promise<void>;
}
