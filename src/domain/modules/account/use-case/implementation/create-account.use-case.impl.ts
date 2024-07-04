import { Account } from '@domain/modules/account/entity/account.entity';
import { AccountRepository } from '@domain/modules/account/repository/account.repository';
import { CreateAccountUseCase } from '@domain/modules/account/use-case/create-account.use-case';

export class CreateAccountUseCaseImpl implements CreateAccountUseCase {
  constructor(private readonly accountRepository: AccountRepository) {}

  public async execute(account: Account): Promise<void> {
    await this.accountRepository.create(account);
  }
}
