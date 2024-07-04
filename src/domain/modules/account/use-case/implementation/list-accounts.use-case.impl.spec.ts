import { AccountRepository } from '@domain/modules/account/repository/account.repository';
import { createAccountMock } from '@domain/modules/account/entity/account.entity.spec';
import { createAccountRepositoryMock } from '@domain/modules/account/repository/implementation/account.repository.impl.spec';
import { ListAccountsUseCaseImpl } from '@domain/modules/account/use-case/implementation/list-accounts.use-case.impl';

describe('ListAccountsUseCaseImpl', () => {
  let accountRepositoryMock: jest.Mocked<AccountRepository>;
  let listAccountsUseCaseImpl: ListAccountsUseCaseImpl;

  beforeEach(() => {
    accountRepositoryMock = createAccountRepositoryMock();
    listAccountsUseCaseImpl = new ListAccountsUseCaseImpl(accountRepositoryMock);
  });

  it('should list accounts', async () => {
    const accounts = [createAccountMock(), createAccountMock()];

    accountRepositoryMock.list.mockResolvedValue(accounts);

    const result = await listAccountsUseCaseImpl.execute();

    expect(result).toEqual(accounts);
    expect(result.length).toEqual(2);
    expect(accountRepositoryMock.list).toHaveBeenCalled();
  });
});
