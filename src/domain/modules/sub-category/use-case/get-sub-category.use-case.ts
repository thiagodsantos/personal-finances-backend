import { Id } from '@domain/value-objects/id.value-object';
import { SubCategory } from '@domain/modules/sub-category/entity/sub-category.entity';

export abstract class GetSubCategoryUseCase {
  abstract execute(subCategory: Id): Promise<SubCategory | null>;
}
