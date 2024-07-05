import { AccountNotFoundError } from '@domain/modules/account/error/account-not-found.error';
import { AccountRepository } from '@domain/modules/account/repository/account.repository';
import { createAccountMock } from '@domain/modules/account/entity/account.entity.spec';
import { createAccountRepositoryMock } from '@domain/modules/account/repository/implementation/account.repository.impl.spec';
import { DeleteAccountUseCaseImpl } from '@domain/modules/account/use-case/implementation/delete-account.use-case.impl';
import { Id } from '@domain/value-objects/id.value-object';

describe('DeleteAccountUseCaseImpl', () => {
  let accountRepositoryMock: jest.Mocked<AccountRepository>;
  let deleteAccountUseCaseImpl: DeleteAccountUseCaseImpl;

  beforeEach(() => {
    accountRepositoryMock = createAccountRepositoryMock();
    deleteAccountUseCaseImpl = new DeleteAccountUseCaseImpl(accountRepositoryMock);
  });

  it('should delete account', async () => {
    const account = createAccountMock();

    accountRepositoryMock.getById.mockResolvedValue(account);

    await deleteAccountUseCaseImpl.execute(account.getId());

    expect(accountRepositoryMock.getById).toHaveBeenCalledWith(account.getId());
    expect(accountRepositoryMock.deleteById).toHaveBeenCalledWith(account.getId());
  });

  it('should throw AccountNotFoundError when account does not exist', async () => {
    const accountId = Id.create('test_id');

    accountRepositoryMock.getById.mockResolvedValue(null);

    await expect(deleteAccountUseCaseImpl.execute(accountId)).rejects.toThrow(AccountNotFoundError);
    expect(accountRepositoryMock.getById).toHaveBeenCalledWith(accountId);
    expect(accountRepositoryMock.deleteById).not.toHaveBeenCalled();
  });
});
