import { Account } from '@domain/modules/account/entity/account.entity';
import { AccountRepository } from '@domain/modules/account/repository/account.repository';
import { UpdateAccountUseCase } from '@domain/modules/account/use-case/update-account.use-case';

export class UpdateAccountUseCaseImpl extends UpdateAccountUseCase {
  constructor(private readonly accountRepository: AccountRepository) {
    super();
  }

  public async execute(account: Account): Promise<void> {
    await this.accountRepository.update(account);
  }
}
