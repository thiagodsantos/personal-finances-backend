import { Account } from '@domain/modules/account/entity/account.entity';
import { AccountNotFoundError } from '@domain/modules/account/error/account-not-found.error';
import { AccountRepository } from '@domain/modules/account/repository/account.repository';
import { UpdateAccountUseCase } from '@domain/modules/account/use-case/update-account.use-case';

export class UpdateAccountUseCaseImpl extends UpdateAccountUseCase {
  constructor(private readonly accountRepository: AccountRepository) {
    super();
  }

  public async execute(account: Account): Promise<void> {
    const accountExists = await this.accountRepository.getById(account.getId());
    if (!accountExists) {
      throw new AccountNotFoundError(account.getId());
    }

    await this.accountRepository.update(account);
  }
}
