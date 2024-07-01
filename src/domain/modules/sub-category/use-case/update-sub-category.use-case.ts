import { SubCategory } from '@domain/modules/sub-category/entity/sub-category.entity';

export interface UpdateSubCategoryUseCase {
  execute(subCategory: SubCategory): Promise<void>;
}