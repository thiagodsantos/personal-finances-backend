import { SubCategoryRepository } from '@domain/modules/sub-category/repository/sub-category.repository';

export const createSubCategoryRepository = (): jest.Mocked<SubCategoryRepository> => ({
  create: jest.fn(),
  deleteById: jest.fn(),
  getById: jest.fn(),
  list: jest.fn(),
  update: jest.fn(),
});

describe('SubCategoryRepository', () => {
  it('should be true', () => {
    expect(true).toBeTruthy();
  });
});
