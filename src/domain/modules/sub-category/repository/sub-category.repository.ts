import { Id } from '@domain/value-objects/id.value-object';
import { SubCategory } from '@domain/modules/sub-category/entity/sub-category.entity';

export abstract class SubCategoryRepository {
  abstract create(subCategory: SubCategory): Promise<void>;
  abstract deleteById(subCategory: Id): Promise<void>;
  abstract getById(id: Id): Promise<SubCategory | null>;
  abstract list(): Promise<SubCategory[]>;
  abstract update(subCategory: SubCategory): Promise<void>;
}
