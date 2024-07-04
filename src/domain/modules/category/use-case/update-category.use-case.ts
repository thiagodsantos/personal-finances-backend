import { Category } from '@domain/modules/category/entity/category.entity';

export interface UpdateCategoryUseCase {
  execute(category: Category): Promise<void>;
}
