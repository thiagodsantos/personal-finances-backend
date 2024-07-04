import { Id } from '@domain/value-objects/id.value-object';
import { Name } from '@domain/value-objects/name.value-object';

export enum AccountType {
  CREDIT_CARD = 'credit_card',
  DEBIT_CARD = 'debit_card',
}

export interface AccountProps {
  id: Id;
  name: Name;
  type: AccountType;
}

export class Account {
  private readonly id: Id;
  private readonly name: Name;
  private readonly type: AccountType;

  private constructor(account: AccountProps) {
    Object.assign(this, account);
  }

  static create(account: AccountProps): Account {
    return new Account(account);
  }

  getId(): Id {
    return this.id;
  }

  getName(): Name {
    return this.name;
  }

  getType(): AccountType {
    return this.type;
  }
}
