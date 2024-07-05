import { CategoryRepository } from '@domain/modules/category/repository/category.repository';
import { createCategoryMock } from '@domain/modules/category/entity/category.entity.spec';
import { createCategoryRepositoryMock } from '@domain/modules/category/repository/category.repository.impl.spec';
import { CreateCategoryUseCaseImpl } from '@domain/modules/category/use-case/implementation/create-category.use-case.impl';

describe('CreateCategoryUseCaseImpl', () => {
  let categoryRepository: jest.Mocked<CategoryRepository>;
  let createCategoryUseCaseImpl: CreateCategoryUseCaseImpl;

  beforeEach(() => {
    categoryRepository = createCategoryRepositoryMock();
    createCategoryUseCaseImpl = new CreateCategoryUseCaseImpl(categoryRepository);
  });

  it('should create a category', async () => {
    const category = createCategoryMock();

    categoryRepository.create.mockResolvedValue();

    await createCategoryUseCaseImpl.execute(category);

    expect(categoryRepository.create).toHaveBeenCalledWith(category);
  });
});
