import { CategoryRepository } from '@domain/modules/category/repository/category.repository';

export const createCategoryRepositoryMock = (): jest.Mocked<CategoryRepository> => {
  return {
    create: jest.fn(),
    deleteById: jest.fn(),
    getById: jest.fn(),
    list: jest.fn(),
    update: jest.fn(),
  };
};

describe('CategoryRepositoryImpl', () => {
  it('should be true', () => {
    expect(true).toBe(true);
  });
});
