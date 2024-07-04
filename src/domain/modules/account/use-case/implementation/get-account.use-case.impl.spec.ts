import { AccountRepository } from '@domain/modules/account/repository/account.repository';
import { createAccountMock } from '@domain/modules/account/entity/account.entity.spec';
import { createAccountRepositoryMock } from '@domain/modules/account/repository/implementation/account.repository.impl.spec';
import { GetAccountUseCaseImpl } from '@domain/modules/account/use-case/implementation/get-account.use-case.impl';

describe('GetAccountUseCaseImpl', () => {
  let accountRepositoryMock: jest.Mocked<AccountRepository>;
  let getAccountUseCaseImpl: GetAccountUseCaseImpl;

  beforeEach(() => {
    accountRepositoryMock = createAccountRepositoryMock();
    getAccountUseCaseImpl = new GetAccountUseCaseImpl(accountRepositoryMock);
  });

  it('should get account', async () => {
    const account = createAccountMock();

    accountRepositoryMock.getById.mockResolvedValue(account);

    const result = await getAccountUseCaseImpl.execute(account.getId());

    expect(result).toEqual(account);
  });

  it('should return null when account does not exist', async () => {
    accountRepositoryMock.getById.mockResolvedValue(null);

    const result = await getAccountUseCaseImpl.execute(createAccountMock().getId());

    expect(result).toBeNull();
  });
});
