import { Account } from '@domain/modules/account/entity/account.entity';
import { AccountRepository } from '@domain/modules/account/repository/account.repository';
import { GetAccountUseCase } from '@domain/modules/account/use-case/get-account.use-case';
import { Id } from '@domain/value-objects/id.value-object';

export class GetAccountUseCaseImpl implements GetAccountUseCase {
  constructor(private readonly accountRepository: AccountRepository) {}

  public async execute(accountId: Id): Promise<Account> {
    return await this.accountRepository.getById(accountId);
  }
}
