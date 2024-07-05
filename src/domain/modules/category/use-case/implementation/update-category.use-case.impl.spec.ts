import { CategoryRepository } from '@domain/modules/category/repository/category.repository';
import { createCategoryMock } from '@domain/modules/category/entity/category.entity.spec';
import { createCategoryRepositoryMock } from '@domain/modules/category/repository/category.repository.impl.spec';
import { UpdateCategoryUseCaseImpl } from '@domain/modules/category/use-case/implementation/update-category.use-case.impl';
import { CategoryNotFoundError } from '@domain/modules/category/error/category-not-found.error';

describe('UpdateCategoryUseCaseImpl', () => {
  let categoryRepository: jest.Mocked<CategoryRepository>;
  let updateCategoryUseCaseImpl: UpdateCategoryUseCaseImpl;

  beforeEach(() => {
    categoryRepository = createCategoryRepositoryMock();
    updateCategoryUseCaseImpl = new UpdateCategoryUseCaseImpl(categoryRepository);
  });

  it('should update a category', async () => {
    const category = createCategoryMock();

    categoryRepository.getById.mockResolvedValue(category);
    categoryRepository.update.mockResolvedValue();

    await updateCategoryUseCaseImpl.execute(category);

    expect(categoryRepository.getById).toHaveBeenCalledWith(category.getId());
    expect(categoryRepository.update).toHaveBeenCalledWith(category);
  });

  it('should throw an error if category does not exist', async () => {
    const category = createCategoryMock();

    categoryRepository.getById.mockResolvedValue(null);

    await expect(updateCategoryUseCaseImpl.execute(category)).rejects.toThrow(
      CategoryNotFoundError
    );
    expect(categoryRepository.getById).toHaveBeenCalledWith(category.getId());
    expect(categoryRepository.update).not.toHaveBeenCalled();
  });
});
