import { Category } from '@domain/modules/category/entity/category.entity';

export abstract class CreateCategoryUseCase {
  abstract execute(category: Category): Promise<void>;
}
