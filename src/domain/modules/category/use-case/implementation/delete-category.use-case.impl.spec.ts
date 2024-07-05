import { CategoryNotFoundError } from '@domain/modules/category/error/category-not-found.error';
import { CategoryRepository } from '@domain/modules/category/repository/category.repository';
import { createCategoryMock } from '@domain/modules/category/entity/category.entity.spec';
import { createCategoryRepositoryMock } from '@domain/modules/category/repository/category.repository.impl.spec';
import { DeleteCategoryUseCaseImpl } from '@domain/modules/category/use-case/implementation/delete-category.use-case.impl';
import { Id } from '@domain/value-objects/id.value-object';

describe('DeleteCategoryUseCaseImpl', () => {
  let categoryRepository: jest.Mocked<CategoryRepository>;
  let deleteCategoryUseCaseImpl: DeleteCategoryUseCaseImpl;

  beforeEach(() => {
    categoryRepository = createCategoryRepositoryMock();
    deleteCategoryUseCaseImpl = new DeleteCategoryUseCaseImpl(categoryRepository);
  });

  it('should delete a category', async () => {
    const category = createCategoryMock();
    const categoryId = category.getId();

    categoryRepository.getById.mockResolvedValue(category);

    categoryRepository.deleteById.mockResolvedValue();

    await deleteCategoryUseCaseImpl.execute(categoryId);

    expect(categoryRepository.getById).toHaveBeenCalledWith(categoryId);
    expect(categoryRepository.deleteById).toHaveBeenCalledWith(categoryId);
  });

  it('should throw an error if category does not exist', async () => {
    const categoryId = Id.create('invalid-id');

    categoryRepository.getById.mockResolvedValue(null);

    await expect(deleteCategoryUseCaseImpl.execute(categoryId)).rejects.toThrow(
      CategoryNotFoundError
    );
    expect(categoryRepository.getById).toHaveBeenCalledWith(categoryId);
    expect(categoryRepository.deleteById).not.toHaveBeenCalled();
  });
});
