import { Injectable } from '@common/di/container/decorator/injectable';

import { Account } from '@domain/modules/account/entity/account.entity';
import { AccountRepository } from '@domain/modules/account/repository/account.repository';
import { CreateAccountUseCase } from '@domain/modules/account/use-case/create-account.use-case';

@Injectable()
export class CreateAccountUseCaseImpl extends CreateAccountUseCase {
  constructor(private readonly accountRepository: AccountRepository) {
    super();
  }

  public async execute(account: Account): Promise<void> {
    await this.accountRepository.create(account);
  }
}
