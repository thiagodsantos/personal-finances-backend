import { Account } from '@domain/modules/account/entity/account.entity';

export abstract class CreateAccountUseCase {
  abstract execute(account: Account): Promise<void>;
}
