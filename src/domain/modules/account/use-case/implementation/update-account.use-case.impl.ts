import { Account } from '@domain/modules/account/entity/account.entity';
import { AccountRepository } from '@domain/modules/account/repository/account.repository';
import { UpdateAccountUseCase } from '@domain/modules/account/use-case/update-account.use-case';

export class UpdateAccountUseCaseImpl implements UpdateAccountUseCase {
  constructor(private readonly accountRepository: AccountRepository) {}

  public async execute(account: Account): Promise<void> {
    await this.accountRepository.update(account);
  }
}
