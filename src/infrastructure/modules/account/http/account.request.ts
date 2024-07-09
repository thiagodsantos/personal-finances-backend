import { Request } from 'express';

import { AccountType } from '@domain/modules/account/entity/account.entity';

interface CreateAccountRequestBody {
  id: string;
  name: string;
  type: AccountType;
}

export interface CreateAccountRequest extends Request {
  body: CreateAccountRequestBody;
}
