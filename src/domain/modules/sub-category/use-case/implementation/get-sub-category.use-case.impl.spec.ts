import { createSubCategoryMock } from '@domain/modules/sub-category/entity/sub-category.entity.spec';
import { createSubCategoryRepository } from '@domain/modules/sub-category/repository/implementation/sub-category.repository.impl.spec';
import { GetSubCategoryUseCaseImpl } from '@domain/modules/sub-category/use-case/implementation/get-sub-category.use-case.impl';
import { SubCategoryRepository } from '@domain/modules/sub-category/repository/sub-category.repository';

describe('GetSubCategoryUseCaseImpl', () => {
  let subCategoryRepository: jest.Mocked<SubCategoryRepository>;
  let getSubCategoryUseCaseImpl: GetSubCategoryUseCaseImpl;

  beforeEach(() => {
    subCategoryRepository = createSubCategoryRepository();
    getSubCategoryUseCaseImpl = new GetSubCategoryUseCaseImpl(subCategoryRepository);
  });

  it('should get sub-category', async () => {
    const subCategory = createSubCategoryMock();

    subCategoryRepository.getById.mockResolvedValue(subCategory);

    const result = await getSubCategoryUseCaseImpl.execute(subCategory.getId());

    expect(result).toEqual(subCategory);
  });
});
