import { CreateSubCategoryUseCase } from '@domain/modules/sub-category/use-case/create-sub-category.use-case';
import { SubCategory } from '@domain/modules/sub-category/entity/sub-category.entity';
import { SubCategoryRepository } from '@domain/modules/sub-category/repository/sub-category.repository';

export class CreateSubCategoryUseCaseImpl extends CreateSubCategoryUseCase {
  constructor(private readonly subCategoryRepository: SubCategoryRepository) {
    super();
  }

  async execute(subCategory: SubCategory): Promise<void> {
    await this.subCategoryRepository.create(subCategory);
  }
}
