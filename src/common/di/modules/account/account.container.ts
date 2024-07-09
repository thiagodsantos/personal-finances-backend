import { container } from 'common/di/container';

import { AccountRepository } from '@domain/modules/account/repository/account.repository';
import { AccountRepositoryImpl } from '@domain/modules/account/repository/implementation/account.repository.impl';

container.register(AccountRepository, AccountRepositoryImpl);

import { CreateAccountUseCase } from '@domain/modules/account/use-case/create-account.use-case';
import { CreateAccountUseCaseImpl } from '@domain/modules/account/use-case/implementation/create-account.use-case.impl';

container.register(CreateAccountUseCase, CreateAccountUseCaseImpl);

export { container as account };
