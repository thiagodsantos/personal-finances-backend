import { CreateAccountResponse } from '@infrastructure/modules/account/http/account.response';

export const createAccountResponseMock = (): jest.Mocked<CreateAccountResponse> => {
  return {
    send: jest.fn(),
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as unknown as jest.Mocked<CreateAccountResponse>;
};

describe('AccountRequest', () => {
  it('should be true', () => {
    expect(true).toBe(true);
  });
});
