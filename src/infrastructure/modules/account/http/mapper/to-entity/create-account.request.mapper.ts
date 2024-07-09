import { Account } from '@domain/modules/account/entity/account.entity';
import { CreateAccountRequest } from '@infrastructure/modules/account/http/account.request';
import { Id } from '@domain/value-objects/id.value-object';
import { Name } from '@domain/value-objects/name.value-object';

export class CreateAccountRequestMapper {
  public static toAccount(request: CreateAccountRequest): Account {
    const { name, id, type } = request.body;

    return Account.create({
      id: Id.create(id),
      name: Name.create(name),
      type: type,
    });
  }
}
