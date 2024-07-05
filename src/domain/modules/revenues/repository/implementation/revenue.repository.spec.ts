import { RevenueRepository } from '@domain/modules/revenues/repository/revenue.repository';

export const createRevenueRepositoryMock = (): jest.Mocked<RevenueRepository> => {
  return {
    create: jest.fn(),
    update: jest.fn(),
    deleteById: jest.fn(),
    getById: jest.fn(),
  };
};

describe('RevenueRepository', () => {
  it('should be true', () => {
    expect(true).toBeTruthy();
  });
});
