import { AccountType } from '@domain/modules/account/entity/account.entity';
import { CreateAccountRequest } from '@infrastructure/modules/account/http/account.request';

export const createAccountRequestMock = (
  overrides?: CreateAccountRequest
): CreateAccountRequest => {
  return {
    body: {
      id: 'id',
      name: 'name',
      type: AccountType.CREDIT_CARD,
    },
    ...overrides,
  } as CreateAccountRequest;
};

describe('AccountRequest', () => {
  it('should be true', () => {
    expect(true).toBe(true);
  });
});
