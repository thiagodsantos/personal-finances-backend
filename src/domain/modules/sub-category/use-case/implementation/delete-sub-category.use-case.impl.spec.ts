import { createSubCategoryMock } from '@domain/modules/sub-category/entity/sub-category.entity.spec';
import { createSubCategoryRepository } from '@domain/modules/sub-category/repository/implementation/sub-category.repository.impl.spec';
import { DeleteSubCategoryUseCaseImpl } from '@domain/modules/sub-category/use-case/implementation/delete-sub-category.use-case.impl';
import { SubCategoryNotFoundError } from '@domain/modules/sub-category/error/sub-category-not-found.error';
import { SubCategoryRepository } from '@domain/modules/sub-category/repository/sub-category.repository';

describe('DeleteSubCategoryUseCaseImpl', () => {
  let subCategoryRepository: jest.Mocked<SubCategoryRepository>;
  let deleteSubCategoryUseCaseImpl: DeleteSubCategoryUseCaseImpl;

  beforeEach(() => {
    subCategoryRepository = createSubCategoryRepository();
    deleteSubCategoryUseCaseImpl = new DeleteSubCategoryUseCaseImpl(subCategoryRepository);
  });

  it('should delete a sub-category', async () => {
    const subCategory = createSubCategoryMock();

    subCategoryRepository.getById.mockResolvedValue(subCategory);

    await deleteSubCategoryUseCaseImpl.execute(subCategory.getId());

    expect(subCategoryRepository.getById).toHaveBeenCalledWith(subCategory.getId());
    expect(subCategoryRepository.deleteById).toHaveBeenCalledWith(subCategory.getId());
  });

  it('should throw an error if sub-category does not exist', async () => {
    const subCategory = createSubCategoryMock();

    subCategoryRepository.getById.mockResolvedValue(null);

    await expect(deleteSubCategoryUseCaseImpl.execute(subCategory.getId())).rejects.toThrow(
      SubCategoryNotFoundError
    );
    expect(subCategoryRepository.getById).toHaveBeenCalledWith(subCategory.getId());
    expect(subCategoryRepository.deleteById).not.toHaveBeenCalled();
  });
});
