import { UserRepository } from '@domain/modules/user/repository/user.repository';

export const createUserRepository = (): jest.Mocked<UserRepository> => {
  return {
    create: jest.fn(),
    update: jest.fn(),
    getById: jest.fn(),
    getByEmail: jest.fn(),
  };
};

describe('UserRepository', () => {
  it('should be true', () => {
    expect(true).toBeTruthy();
  });
});
