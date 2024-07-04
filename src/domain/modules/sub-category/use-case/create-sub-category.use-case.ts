import { SubCategory } from '@domain/modules/sub-category/entity/sub-category.entity';

export abstract class CreateSubCategoryUseCase {
  abstract execute(subCategory: SubCategory): Promise<void>;
}
