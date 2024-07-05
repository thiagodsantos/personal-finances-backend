import { createSubCategoryMock } from '@domain/modules/sub-category/entity/sub-category.entity.spec';
import { createSubCategoryRepository } from '@domain/modules/sub-category/repository/implementation/sub-category.repository.impl.spec';
import { CreateSubCategoryUseCaseImpl } from '@domain/modules/sub-category/use-case/implementation/create-sub-category.use-case.impl';
import { SubCategoryRepository } from '@domain/modules/sub-category/repository/sub-category.repository';

describe('CreateSubCategoryUseCaseImpl', () => {
  let subCategoryRepository: jest.Mocked<SubCategoryRepository>;
  let createSubCategoryUseCaseImpl: CreateSubCategoryUseCaseImpl;

  beforeEach(() => {
    subCategoryRepository = createSubCategoryRepository();
    createSubCategoryUseCaseImpl = new CreateSubCategoryUseCaseImpl(subCategoryRepository);
  });

  it('should create a sub-category', async () => {
    const subCategory = createSubCategoryMock();

    await createSubCategoryUseCaseImpl.execute(subCategory);

    expect(subCategoryRepository.create).toHaveBeenCalledWith(subCategory);
  });
});
