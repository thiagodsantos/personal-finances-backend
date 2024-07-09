import { AccountHttp } from '@infrastructure/modules/account/http/account.http';
import { CreateAccountRequestMapper } from '@infrastructure/modules/account/http/mapper/to-entity/create-account.request.mapper';
import { createAccountRequestMock } from '@infrastructure/modules/account/http/account.request.spec';
import { CreateAccountResponse } from '@infrastructure/modules/account/http/account.response';
import { createAccountResponseMock } from '@infrastructure/modules/account/http/account.response.spec';
import { CreateAccountUseCase } from '@domain/modules/account/use-case/create-account.use-case';
import { createAccountUseCaseMock } from '@domain/modules/account/use-case/implementation/create-account.use-case.impl.spec';

describe('AccountHttp', () => {
  let createAccountResponse: jest.Mocked<CreateAccountResponse>;
  let createAccountUseCase: jest.Mocked<CreateAccountUseCase>;
  let accountHttp: AccountHttp;

  beforeEach(() => {
    createAccountUseCase = createAccountUseCaseMock();
    createAccountResponse = createAccountResponseMock();

    accountHttp = new AccountHttp(createAccountUseCase);
  });

  describe('createAccount', () => {
    it('should create account', async () => {
      const createAccountRequest = createAccountRequestMock();
      createAccountUseCase.execute.mockResolvedValue();

      await accountHttp.createAccount(createAccountRequest, createAccountResponse);

      expect(createAccountUseCase.execute).toHaveBeenCalledWith(
        CreateAccountRequestMapper.toAccount(createAccountRequest)
      );
      expect(createAccountResponse.send).toHaveBeenCalled();
    });
  });
});
