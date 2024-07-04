import { AccountNotFoundError } from '@domain/modules/account/error/account-not-found.error';
import { AccountRepository } from '@domain/modules/account/repository/account.repository';
import { createAccountMock } from '@domain/modules/account/entity/account.entity.spec';
import { createAccountRepositoryMock } from '@domain/modules/account/repository/implementation/account.repository.impl.spec';
import { UpdateAccountUseCaseImpl } from '@domain/modules/account/use-case/implementation/update-account.use-case.impl';

describe('UpdateAccountUseCaseImpl', () => {
  let accountRepositoryMock: jest.Mocked<AccountRepository>;
  let updateAccountUseCaseImpl: UpdateAccountUseCaseImpl;

  beforeEach(() => {
    accountRepositoryMock = createAccountRepositoryMock();
    updateAccountUseCaseImpl = new UpdateAccountUseCaseImpl(accountRepositoryMock);
  });

  it('should update account', async () => {
    const account = createAccountMock();

    accountRepositoryMock.getById.mockResolvedValue(account);

    await updateAccountUseCaseImpl.execute(account);

    expect(accountRepositoryMock.getById).toHaveBeenCalledWith(account.getId());
    expect(accountRepositoryMock.update).toHaveBeenCalledWith(account);
  });

  it('should throw AccountNotFoundError when account does not exist', async () => {
    accountRepositoryMock.getById.mockResolvedValue(null);

    await expect(updateAccountUseCaseImpl.execute(createAccountMock())).rejects.toThrow(
      AccountNotFoundError
    );

    expect(accountRepositoryMock.update).not.toHaveBeenCalled();
  });
});
