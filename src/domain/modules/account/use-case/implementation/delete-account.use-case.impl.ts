import { AccountRepository } from '@domain/modules/account/repository/account.repository';
import { DeleteAccountUseCase } from '@domain/modules/account/use-case/delete-account.use-case';
import { Id } from '@domain/value-objects/id.value-object';

export class DeleteAccountUseCaseImpl implements DeleteAccountUseCase {
  constructor(private readonly accountRepository: AccountRepository) {}

  public async execute(accountId: Id): Promise<void> {
    await this.accountRepository.delete(accountId);
  }
}
