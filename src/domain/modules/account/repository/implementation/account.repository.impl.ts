import { Injectable } from '@common/di/container/decorator/injectable';

import { Account } from '@domain/modules/account/entity/account.entity';
import { AccountRepository } from '@domain/modules/account/repository/account.repository';
import { Id } from '@domain/value-objects/id.value-object';

@Injectable()
export class AccountRepositoryImpl extends AccountRepository {
  async deleteById(accountId: Id): Promise<void> {
    console.log(`AccountRepositoryImpl.deleteById: ${accountId.getValue()}`);
  }

  async getById(accountId: Id): Promise<Account | null> {
    console.log(`AccountRepositoryImpl.getById: ${accountId.getValue()}`);
    return null;
  }

  async list(): Promise<Account[]> {
    console.log('AccountRepositoryImpl.list');
    return [];
  }

  async update(account: Account): Promise<void> {
    console.log(`AccountRepositoryImpl.update: ${account.getName().getValue()}`);
  }

  async create(account: Account): Promise<void> {
    console.log(`AccountRepositoryImpl.create: ${account.getName().getValue()}`);
  }
}
