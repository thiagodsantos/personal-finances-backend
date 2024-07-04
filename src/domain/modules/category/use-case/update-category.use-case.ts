import { Category } from '@domain/modules/category/entity/category.entity';

export abstract class UpdateCategoryUseCase {
  abstract execute(category: Category): Promise<void>;
}
