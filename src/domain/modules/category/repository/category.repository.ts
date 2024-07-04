import { Category } from '@domain/modules/category/entity/category.entity';
import { Id } from '@domain/value-objects/id.value-object';

export interface CategoryRepository {
  create(category: Category): Promise<void>;
  delete(categoryId: Id): Promise<void>;
  getById(categoryId: Id): Promise<Category>;
  list(): Promise<Category[]>;
  update(category: Category): Promise<void>;
}
