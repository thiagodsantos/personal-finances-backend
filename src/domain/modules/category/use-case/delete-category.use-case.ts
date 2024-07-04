import { Id } from '@domain/value-objects/id.value-object';

export interface DeleteCategoryUseCase {
  execute(categoryId: Id): Promise<void>;
}
