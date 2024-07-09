import ExpressExceptionHandler from '@common/http/decorator/error.decorator';

import { account } from '@infrastructure/modules/account/account.container';
import { CreateAccountRequest } from '@infrastructure/modules/account/http/account.request';
import { CreateAccountRequestMapper } from '@infrastructure/modules/account/http/mapper/to-entity/create-account.request.mapper';
import { CreateAccountResponse } from '@infrastructure/modules/account/http/account.response';
import { CreateAccountUseCase } from '@domain/modules/account/use-case/create-account.use-case';
import { Injectable } from '@common/container/decorator/injectable.decorator';

@Injectable()
export class AccountHttp {
  constructor(private readonly createAccountUseCase: CreateAccountUseCase) {
    this.createAccountUseCase = account.resolve(CreateAccountUseCase, createAccountUseCase);
  }

  @ExpressExceptionHandler()
  public async createAccount(req: CreateAccountRequest, res: CreateAccountResponse): Promise<void> {
    const account = CreateAccountRequestMapper.toAccount(req);

    await this.createAccountUseCase.execute(account);

    res.send('Account created');
  }
}
