import { CreateAccountRequestMapper } from '@infrastructure/modules/account/http/mapper/to-entity/create-account.request.mapper';
import { createAccountRequestMock } from '@infrastructure/modules/account/http/account.request.spec';

describe('CreateAccountRequestMapper', () => {
  describe('toAccount', () => {
    it('should map request to account', () => {
      const createAccountRequest = createAccountRequestMock();

      const result = CreateAccountRequestMapper.toAccount(createAccountRequest);

      expect(result.getId().getValue()).toBe(createAccountRequest.body.id);
      expect(result.getName().getValue()).toBe(createAccountRequest.body.name);
      expect(result.getType()).toBe(createAccountRequest.body.type);
    });
  });
});
