import { SubCategory } from '@domain/modules/sub-category/entity/sub-category.entity';
import { SubCategoryNotFoundError } from '@domain/modules/sub-category/error/sub-category-not-found.error';
import { SubCategoryRepository } from '@domain/modules/sub-category/repository/sub-category.repository';
import { UpdateSubCategoryUseCase } from '@domain/modules/sub-category/use-case/update-sub-category.use-case';

export class UpdateSubCategoryUseCaseImpl implements UpdateSubCategoryUseCase {
  constructor(private readonly subCategoryRepository: SubCategoryRepository) {}

  async execute(subCategory: SubCategory): Promise<void> {
    const categoryExists = await this.subCategoryRepository.getById(subCategory.getId());
    if (!categoryExists) {
      throw new SubCategoryNotFoundError(subCategory.getId());
    }

    await this.subCategoryRepository.update(subCategory);
  }
}
