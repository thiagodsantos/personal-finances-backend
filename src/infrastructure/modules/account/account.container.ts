import { container } from '@common/container';

import { AccountRepository } from '@domain/modules/account/repository/account.repository';
import { AccountRepositoryImpl } from '@domain/modules/account/repository/implementation/account.repository.impl';
import { CreateAccountUseCase } from '@domain/modules/account/use-case/create-account.use-case';
import { CreateAccountUseCaseImpl } from '@domain/modules/account/use-case/implementation/create-account.use-case.impl';

container.register(AccountRepository, AccountRepositoryImpl);
container.register(CreateAccountUseCase, CreateAccountUseCaseImpl);

export { container as account };
