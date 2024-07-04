import { Category } from '@domain/modules/category/entity/category.entity';
import { Id } from '@domain/value-objects/id.value-object';

export abstract class CategoryRepository {
  abstract create(category: Category): Promise<void>;
  abstract delete(categoryId: Id): Promise<void>;
  abstract getById(categoryId: Id): Promise<Category>;
  abstract list(): Promise<Category[]>;
  abstract update(category: Category): Promise<void>;
}
