import { createSubCategoryMock } from '@domain/modules/sub-category/entity/sub-category.entity.spec';
import { createSubCategoryRepository } from '@domain/modules/sub-category/repository/implementation/sub-category.repository.impl.spec';
import { ListSubCategoryUseCaseImpl } from '@domain/modules/sub-category/use-case/implementation/list-sub-category.use-case.impl';
import { SubCategoryRepository } from '@domain/modules/sub-category/repository/sub-category.repository';

describe('ListSubCategoryUseCaseImpl', () => {
  let subCategoryRepository: jest.Mocked<SubCategoryRepository>;
  let listSubCategoryUseCaseImpl: ListSubCategoryUseCaseImpl;

  beforeEach(() => {
    subCategoryRepository = createSubCategoryRepository();
    listSubCategoryUseCaseImpl = new ListSubCategoryUseCaseImpl(subCategoryRepository);
  });

  it('should list sub-categories', async () => {
    const subCategories = [createSubCategoryMock(), createSubCategoryMock()];

    subCategoryRepository.list.mockResolvedValue(subCategories);

    const result = await listSubCategoryUseCaseImpl.execute();

    expect(result).toEqual(subCategories);
    expect(result.length).toEqual(2);
    expect(subCategoryRepository.list).toHaveBeenCalled();
  });
});
