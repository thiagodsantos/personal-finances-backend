import { GetSubCategoryUseCase } from '@domain/modules/sub-category/use-case/get-sub-category.use-case';
import { Id } from '@domain/value-objects/id.value-object';
import { SubCategory } from '@domain/modules/sub-category/entity/sub-category.entity';
import { SubCategoryRepository } from '@domain/modules/sub-category/repository/sub-category.repository';

export class GetSubCategoryUseCaseImpl extends GetSubCategoryUseCase {
  constructor(private readonly subCategoryRepository: SubCategoryRepository) {
    super();
  }

  async execute(subCategory: Id): Promise<SubCategory | null> {
    return await this.subCategoryRepository.getById(subCategory);
  }
}
