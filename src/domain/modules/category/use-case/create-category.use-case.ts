import { Category } from '@domain/modules/category/entity/category.entity';

export interface CreateCategoryUseCase {
  execute(category: Category): Promise<void>;
}