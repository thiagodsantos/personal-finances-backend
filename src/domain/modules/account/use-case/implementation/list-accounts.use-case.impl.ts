import { Account } from '@domain/modules/account/entity/account.entity';
import { AccountRepository } from '@domain/modules/account/repository/account.repository';
import { ListAccountsUseCase } from '@domain/modules/account/use-case/list-accounts.use-case';

export class ListAccountsUseCaseImpl extends ListAccountsUseCase {
  constructor(private readonly accountRepository: AccountRepository) {
    super();
  }

  public async execute(): Promise<Account[]> {
    return await this.accountRepository.list();
  }
}
