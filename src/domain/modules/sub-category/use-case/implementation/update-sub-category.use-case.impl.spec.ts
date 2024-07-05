import { createSubCategoryMock } from '@domain/modules/sub-category/entity/sub-category.entity.spec';
import { createSubCategoryRepository } from '@domain/modules/sub-category/repository/implementation/sub-category.repository.impl.spec';
import { SubCategoryRepository } from '@domain/modules/sub-category/repository/sub-category.repository';
import { UpdateSubCategoryUseCaseImpl } from '@domain/modules/sub-category/use-case/implementation/update-sub-category.use-case.impl';

describe('UpdateSubCategoryUseCaseImpl', () => {
  let subCategoryRepository: jest.Mocked<SubCategoryRepository>;
  let updateSubCategoryUseCaseImpl: UpdateSubCategoryUseCaseImpl;

  beforeEach(() => {
    subCategoryRepository = createSubCategoryRepository();
    updateSubCategoryUseCaseImpl = new UpdateSubCategoryUseCaseImpl(subCategoryRepository);
  });

  it('should update sub-category', async () => {
    const subCategory = createSubCategoryMock();

    subCategoryRepository.getById.mockResolvedValue(subCategory);

    await updateSubCategoryUseCaseImpl.execute(subCategory);

    expect(subCategoryRepository.getById).toHaveBeenCalledWith(subCategory.getId());
    expect(subCategoryRepository.update).toHaveBeenCalledWith(subCategory);
  });
});
