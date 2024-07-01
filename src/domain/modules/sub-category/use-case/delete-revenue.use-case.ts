import { Id } from '@domain/value-objects/id.value-object';

export interface DeleteSubCategoryUseCase {
  execute(subCategory: Id): Promise<void>
}