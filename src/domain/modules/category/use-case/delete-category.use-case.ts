import { Id } from '@domain/value-objects/id.value-object';

export abstract class DeleteCategoryUseCase {
  abstract execute(categoryId: Id): Promise<void>;
}
