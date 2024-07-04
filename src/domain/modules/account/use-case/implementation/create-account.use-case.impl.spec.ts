import { AccountRepository } from '@domain/modules/account/repository/account.repository';
import { createAccountMock } from '@domain/modules/account/entity/account.entity.spec';
import { createAccountRepositoryMock } from '@domain/modules/account/repository/implementation/account.repository.impl.spec';
import { CreateAccountUseCaseImpl } from '@domain/modules/account/use-case/implementation/create-account.use-case.impl';

describe('CreateAccountUseCaseImpl', () => {
  let accountRepositoryMock: jest.Mocked<AccountRepository>;
  let createAccountUseCaseImpl: CreateAccountUseCaseImpl;

  beforeEach(() => {
    accountRepositoryMock = createAccountRepositoryMock();
    createAccountUseCaseImpl = new CreateAccountUseCaseImpl(accountRepositoryMock);
  });

  it('should create account', async () => {
    const account = createAccountMock();

    await createAccountUseCaseImpl.execute(account);

    expect(accountRepositoryMock.create).toHaveBeenCalledWith(account);
  });
});
