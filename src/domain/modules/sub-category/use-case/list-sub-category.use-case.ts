import { SubCategory } from '@domain/modules/sub-category/entity/sub-category.entity';

export abstract class ListSubCategoryUseCase {
  abstract execute(): Promise<SubCategory[]>;
}
