import { AccountRepository } from '@domain/modules/account/repository/account.repository';

export const createAccountRepositoryMock = (): jest.Mocked<AccountRepository> => ({
  create: jest.fn(),
  deleteById: jest.fn(),
  getById: jest.fn(),
  list: jest.fn(),
  update: jest.fn(),
});

describe('AccountRepositoryImpl', () => {
  it('should be true', () => {
    expect(true).toBeTruthy();
  });
});
