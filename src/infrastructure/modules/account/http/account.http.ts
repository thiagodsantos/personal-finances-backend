import { ExpressExceptionHandler } from '@common/http/decorator/error.decorator';
import { account } from '@container/modules/account/account.container';
import { Account } from '@domain/modules/account/entity/account.entity';
import { CreateAccountUseCase } from '@domain/modules/account/use-case/create-account.use-case';
import { Id } from '@domain/value-objects/id.value-object';
import { Name } from '@domain/value-objects/name.value-object';

import {
  CreateAccountRequest,
  CreateAccountResponse,
} from '@infrastructure/modules/account/http/account.request';

export class AccountHttp {
  private readonly createAccountUseCase = account.resolve(CreateAccountUseCase);

  @ExpressExceptionHandler()
  public async createAccount(req: CreateAccountRequest, res: CreateAccountResponse): Promise<void> {
    const { name, id, type } = req.body;

    const account = Account.create({
      id: Id.create(id),
      name: Name.create(name),
      type: type,
    });

    await this.createAccountUseCase.execute(account);

    res.send('Account created');
  }
}
