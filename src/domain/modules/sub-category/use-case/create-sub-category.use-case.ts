import { SubCategory } from '@domain/modules/sub-category/entity/sub-category.entity';

export interface CreateSubCategoryUseCase {
  execute(subCategory: SubCategory): Promise<void>
}